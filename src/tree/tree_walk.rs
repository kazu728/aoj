use super::RcRefCellNode;

type MaybeRcRefCellNode<'a> = &'a Option<RcRefCellNode>;
type Output<'a> = &'a mut Vec<i8>;

pub fn preorder_travese<'a>(maybe_node: MaybeRcRefCellNode, output: Output<'a>) -> Output<'a> {
    match maybe_node {
        Some(n) => {
            let a = n.borrow();

            output.push(a.value);
            preorder_travese(&a.left, output);
            preorder_travese(&a.right, output)
        }
        None => output,
    }
}

pub fn inorder_travrse<'a>(maybe_node: MaybeRcRefCellNode, output: Output<'a>) -> Output<'a> {
    match maybe_node {
        Some(n) => {
            let a = n.borrow();

            inorder_travrse(&a.left, output);
            output.push(a.value);
            inorder_travrse(&a.right, output)
        }
        None => output,
    }
}

pub fn postorder_traverse<'a>(maybe_node: MaybeRcRefCellNode, output: Output<'a>) -> Output<'a> {
    match maybe_node {
        Some(n) => {
            let a = n.borrow();

            postorder_traverse(&a.left, output);
            postorder_traverse(&a.right, output);

            output.push(a.value);
            output
        }
        None => output,
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree::from_slice;
    use std::vec;

    const INPUT: &'static [[i8; 3]] = &[
        [0, 1, 4],
        [1, 2, 3],
        [2, -1, -1],
        [3, -1, -1],
        [4, 5, 8],
        [5, 6, 7],
        [6, -1, -1],
        [7, -1, -1],
        [8, -1, -1],
    ];

    #[test]
    fn should_preorder_traverse() {
        let node = from_slice(INPUT);

        assert_eq!(
            preorder_travese(&Some(node), &mut vec![]).to_owned(),
            [0, 1, 2, 3, 4, 5, 6, 7, 8]
        );
    }

    #[test]
    fn should_inorder_traverse() {
        let node = from_slice(INPUT);

        assert_eq!(
            inorder_travrse(&Some(node), &mut vec![]).to_owned(),
            [2, 1, 3, 0, 6, 5, 7, 4, 8]
        );
    }

    #[test]
    fn should_postorder_traverse() {
        let node = from_slice(INPUT);
        assert_eq!(
            postorder_traverse(&Some(node), &mut vec![]).to_owned(),
            [2, 3, 1, 6, 7, 5, 8, 4, 0]
        );
    }
}
