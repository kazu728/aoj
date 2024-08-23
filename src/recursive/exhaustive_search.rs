use std::collections::HashSet;

pub fn can_compose_a_from_b<'a>(a: &[i32], b: &[i32], result: &'a mut [bool]) -> &'a [bool] {
    for (i, e) in a.iter().enumerate() {
        result[i] = can_divide(*e, b, 0);
    }

    result
}

fn can_divide(a: i32, b: &[i32], i: usize) -> bool {
    if b.len() <= i {
        return false;
    }
    if a == 0 {
        return true;
    }
    can_divide(a, b, i + 1) || can_divide(a - b[i], b, i + 1)
}

pub fn can_compose_a_from_b_dp<'a>(a: &[i32], b: &[i32], result: &'a mut [bool]) -> &'a [bool] {
    let mut dp: HashSet<i32> = HashSet::new();

    for &a in b.iter() {
        dp.extend(dp.iter().map(|&x| x + a).collect::<Vec<i32>>());
        dp.insert(a);
    }

    for (i, a) in a.iter().enumerate() {
        result[i] = dp.get(a).is_some();
    }

    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_can_compose_a_from_b() {
        let a = &[2, 4, 17, 8];
        let b = &[1, 5, 7, 10, 21];

        assert_eq!(
            can_compose_a_from_b(a, b, &mut [false; 4]),
            &[false, false, true, true]
        )
    }

    #[test]
    fn test_can_compose_a_from_b_dp() {
        let a = &[2, 4, 17, 8];
        let b = &[1, 5, 7, 10, 21];

        assert_eq!(
            can_compose_a_from_b_dp(a, b, &mut [false; 4]),
            &[false, false, true, true]
        )
    }
}
