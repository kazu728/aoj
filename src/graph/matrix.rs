type Output<'a> = &'a mut [&'a mut [i8]];

pub fn matrix<'a>(output: Output<'a>, vec: &[Vec<i8>]) -> Output<'a> {
    for v in vec.iter() {
        let vertex = v[0];
        let edges = &v[2..];

        for edge in edges.iter() {
            output[(vertex - 1) as usize][(edge - 1) as usize] = 1;
        }
    }
    output
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn should_generate_matrix() {
        let input = vec![vec![1, 2, 2, 4], vec![2, 1, 4], vec![3, 0], vec![4, 1, 3]];

        let mut output: [[i8; 4]; 4] = [[0; 4]; 4];
        let mut output_slices: Vec<&mut [i8]> =
            output.iter_mut().map(|row| row.as_mut_slice()).collect();

        assert_eq!(
            matrix(&mut output_slices, &input),
            [[0, 1, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0], [0, 0, 1, 0],]
        );
    }
}
