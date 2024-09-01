use std::cmp::max;

pub fn calculate_max_value(a: &[(usize, usize)], w: usize) -> u8 {
    let dp: &mut Vec<Vec<usize>> = &mut vec![vec![0; w + 1]; a.len() + 1];

    for i in 1..=a.len() {
        if i == 0 {
            continue;
        }

        for j in 0..=w {
            let (value, weight) = a[i - 1];

            dp[i][j] = if j < weight {
                dp[i - 1][j]
            } else {
                max(dp[i - 1][j], value + dp[i - 1][j - weight])
            }
        }
    }

    dp[a.len()][w] as u8
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_calculate_max_value() {
        let a = &[(4, 2), (5, 2), (2, 1), (8, 3)];
        let w = 5;

        assert_eq!(calculate_max_value(a, w), 13)
    }
}
