use std::mem::MaybeUninit;

#[derive(Debug)]
pub struct Queue<T, const N: usize> {
    head: usize,
    tail: usize,
    buffer: [MaybeUninit<T>; N],
    size: usize,
}

impl<T: Copy, const N: usize> Queue<T, N> {
    // パフォーマンス的に静的に解決したいためVecは使用しない
    // Queue::new() を呼び出した後に必ず初期化をしなければならない
    pub fn new(head: usize, tail: usize, size: usize) -> Self {
        let queue = Queue {
            head,
            tail,
            buffer: unsafe { MaybeUninit::uninit().assume_init() },
            size,
        };

        queue
    }

    pub fn enqueue(&mut self, value: T) {
        self.buffer[self.tail] = MaybeUninit::new(value);

        if self.tail + 1 < self.size {
            self.tail += 1;
        } else {
            self.tail = 0
        }
    }

    pub fn dequeue(&mut self) -> Option<T> {
        let maybe_value = Some(unsafe { self.buffer[self.head].as_ptr().read() });

        if self.head + 1 < self.size {
            self.head += 1;
        } else {
            self.head = 0
        }

        maybe_value
    }

    pub fn initialize_with(head: usize, tail: usize, size: usize, values: &[T]) -> Self {
        let mut queue = Queue::new(head, tail, size);
        values.iter().for_each(|&value| queue.enqueue(value));

        queue
    }
}

type Process<'a> = (&'a str, i16);

#[derive(Debug, PartialEq)]
pub enum CalculationError {
    QueueEmpty,
}

pub fn calculate<'a, 'b: 'a, const N: usize>(
    quantum: i16,
    processes: &'b [Process<'b>],
    result: &'a mut [Process<'a>],
) -> Result<&'a [Process<'a>], CalculationError> {
    let mut queue: Queue<Process, N> = Queue::initialize_with(0, 0, 20, processes);

    let (mut current_index, mut past_time) = (0, 0);

    while queue.head != queue.tail {
        let (name, remaining_time) = queue.dequeue().ok_or(CalculationError::QueueEmpty)?;

        if remaining_time <= quantum {
            past_time += remaining_time;
            result[current_index] = (name, past_time);
            current_index += 1;
        } else {
            past_time += quantum;
            queue.enqueue((name, remaining_time - quantum));
        }
    }

    Ok(result)
}

#[cfg(test)]
mod tests {
    use crate::data_structure::queue::{calculate, Process};

    #[test]
    fn foo() {
        let processes: &[Process] = &[
            ("p1", 150),
            ("p2", 80),
            ("p3", 200),
            ("p4", 350),
            ("p5", 20),
        ];

        assert_eq!(
            calculate::<20>(100, processes, &mut [("", 0); 5]).unwrap(),
            &[
                ("p2", 180),
                ("p5", 400),
                ("p1", 450),
                ("p3", 550),
                ("p4", 800)
            ]
        );
    }
}
