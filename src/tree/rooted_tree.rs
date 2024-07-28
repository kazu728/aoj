use super::NodeKind;

#[derive(PartialEq, Debug)]
pub enum RootedTreeError {
    IncosistentInput,
}

#[derive(Debug, PartialEq, Eq, Clone)]
pub struct Node {
    id: u8,
    depth: u8,
    parent: i8,
    kind: NodeKind,
    children: Vec<u8>,
}

impl Node {
    pub fn new(id: u8, depth: u8, parent: i8, kind: NodeKind, children: Vec<u8>) -> Self {
        Node {
            id,
            depth,
            parent,
            kind,
            children,
        }
    }
}

pub fn to_vec(
    input: &[&[u8]],
    raw_node: &[u8],
    depth: u8,
    parent_id: i8, // Root nodeの場合位、parentが -1なのでここだけ i8
    acc: &mut Vec<Node>,
) -> Result<Vec<Node>, RootedTreeError> {
    let (id, children_count, children) = (raw_node[0], raw_node[1], &raw_node[2..]);
    let kind = NodeKind::new(id, children_count);

    acc.push(Node::new(id, depth, parent_id, kind, children.to_vec()));

    for &child in children {
        input
            .get(child as usize)
            .ok_or(RootedTreeError::IncosistentInput)
            .and_then(|raw_node| to_vec(input, raw_node, depth + 1, id as i8, acc))?;
    }

    Ok(acc.to_vec())
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn should_display_node() {
        let input: &[&[u8]] = &[
            &[0, 3, 1, 4, 10],
            &[1, 2, 2, 3],
            &[2, 0],
            &[3, 0],
            &[4, 3, 5, 6, 7],
            &[5, 0],
            &[6, 0],
            &[7, 2, 8, 9],
            &[8, 0],
            &[9, 0],
            &[10, 2, 11, 12],
            &[11, 0],
            &[12, 0],
        ];

        assert_eq!(
            to_vec(input, input[0], 0, -1, &mut vec![]),
            Ok(vec![
                Node::new(0, 0, -1, NodeKind::Root, vec![1, 4, 10]),
                Node::new(1, 1, 0, NodeKind::Internal, vec![2, 3]),
                Node::new(2, 2, 1, NodeKind::Leaf, vec![]),
                Node::new(3, 2, 1, NodeKind::Leaf, vec![]),
                Node::new(4, 1, 0, NodeKind::Internal, vec![5, 6, 7]),
                Node::new(5, 2, 4, NodeKind::Leaf, vec![]),
                Node::new(6, 2, 4, NodeKind::Leaf, vec![]),
                Node::new(7, 2, 4, NodeKind::Internal, vec![8, 9]),
                Node::new(8, 3, 7, NodeKind::Leaf, vec![]),
                Node::new(9, 3, 7, NodeKind::Leaf, vec![]),
                Node::new(10, 1, 0, NodeKind::Internal, vec![11, 12]),
                Node::new(11, 2, 10, NodeKind::Leaf, vec![]),
                Node::new(12, 2, 10, NodeKind::Leaf, vec![]),
            ])
        );
    }
}
