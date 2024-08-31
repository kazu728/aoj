fn search(a: &[u8], b: &[u8]) -> u8 {
    b.iter().filter(|&&c| binary_search(a, c)).count() as u8
}

fn binary_search(a: &[u8], target: u8) -> bool {
    let mut left = 0;
    let mut right = a.len() - 1;

    while left < right {
        let mid = ((left + right) / 2) as usize;
        match a[mid].cmp(&target) {
            std::cmp::Ordering::Equal => return true,
            std::cmp::Ordering::Less => left = mid + 1,
            std::cmp::Ordering::Greater => right = mid - 1,
        }
    }
    false
}

#[cfg(test)]
mod tests {
    use crate::searching::binary_search::search;

    #[test]
    fn should_searh() {
        let a = &[1, 2, 3, 4, 5];
        let b = &[3, 4, 1];

        assert_eq!(search(a, b), 3);

        let a = &[1, 2, 3, 4, 5];
        let b = &[10, 8, 1];

        assert_eq!(search(a, b), 1);
    }
}
