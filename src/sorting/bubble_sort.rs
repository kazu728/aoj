pub fn sort<T>(l: &mut [T]) -> (&[T], u32)
where
    T: PartialEq + PartialOrd,
{
    let mut swap_count = 0;

    for i in 0..l.len() {
        for j in 0..l.len() - i {
            if j < l.len() - 1 && l[j + 1] < l[j] {
                l.swap(j + 1, j);
                swap_count += 1;
            }
        }
    }

    (l, swap_count)
}

#[cfg(test)]
mod tests {
    use std::vec;

    use crate::sorting::bubble_sort::sort;

    #[test]
    fn should_sort() {
        let mut input = [5, 3, 2, 4, 1];

        let (l, swap_count) = sort(&mut input);

        assert_eq!(l, &[1, 2, 3, 4, 5]);
        assert_eq!(swap_count, 8);

        let mut input = vec!['c', 'b', 'a'];

        let (l, swap_count) = sort(&mut input);

        assert_eq!(l, &['a', 'b', 'c']);
        assert_eq!(swap_count, 3);
    }
}
