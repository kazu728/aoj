use std::vec;

use super::{
    calculate_depth, calculate_height, find_siblings_node, from_slice, get_children_count,
    get_parent_node_value, NodeKind, RcRefCellNode,
};

#[derive(Debug, PartialEq, Eq)]
struct Output {
    value: i8,
    parent: i8,
    sibling: i8,
    degree: u8,
    depth: u8,
    height: u8,
    kind: NodeKind,
}

impl Output {
    fn new(
        value: i8,
        parent: i8,
        sibling: i8,
        degree: u8,
        depth: u8,
        height: u8,
        kind: NodeKind,
    ) -> Self {
        Self {
            value,
            parent,
            sibling,
            degree,
            depth,
            height,
            kind,
        }
    }
}

fn to_output<'a>(
    root_node: &'a RcRefCellNode,
    node: &'a RcRefCellNode,
    outputs: &'a mut Vec<Output>,
) -> &'a mut Vec<Output> {
    let current_node = &node.borrow();

    let value = current_node.value;
    let parent = get_parent_node_value(node);
    let sibling = find_siblings_node(node).map_or(-1, |sibling| sibling.borrow().value);
    let degree = get_children_count(&current_node.left, &current_node.right);
    let depth = calculate_depth(root_node, node, 0);
    let height = calculate_height(node);
    let kind = NodeKind::new(
        value,
        get_children_count(&current_node.left, &current_node.right),
    );

    outputs.push(Output::new(
        value,
        parent,
        sibling,
        degree,
        depth.unwrap(),
        height,
        kind,
    ));

    if let Some(left) = &current_node.left {
        to_output(root_node, left, outputs);
    }

    if let Some(right) = &current_node.right {
        to_output(root_node, right, outputs);
    }

    outputs
}

fn traverse(input: &[[i8; 3]]) -> Vec<Output> {
    let node = from_slice(input);

    let mut outputs: Vec<Output> = vec![];
    to_output(&node, &node, &mut outputs);

    outputs
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn generate_tree_test() {
        let input: &[[i8; 3]] = &[
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

        let outputs = vec![
            Output::new(0, -1, -1, 2, 0, 3, NodeKind::Root),
            Output::new(1, 0, 4, 2, 1, 1, NodeKind::Internal),
            Output::new(2, 1, 3, 0, 2, 0, NodeKind::Leaf),
            Output::new(3, 1, 2, 0, 2, 0, NodeKind::Leaf),
            Output::new(4, 0, 1, 2, 1, 2, NodeKind::Internal),
            Output::new(5, 4, 8, 2, 2, 1, NodeKind::Internal),
            Output::new(6, 5, 7, 0, 3, 0, NodeKind::Leaf),
            Output::new(7, 5, 6, 0, 3, 0, NodeKind::Leaf),
            Output::new(8, 4, 5, 0, 2, 0, NodeKind::Leaf),
        ];

        assert_eq!(traverse(input), outputs);
    }
}
