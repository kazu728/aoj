pub mod rooted_tree;

#[derive(Debug, PartialEq, Eq, Clone)]
pub enum NodeKind {
    Root,
    Internal,
    Leaf,
}

impl NodeKind {
    pub fn new(id: u8, children_count: u8) -> NodeKind {
        match children_count {
            0 => NodeKind::Leaf,
            _ if id != 0 => NodeKind::Internal,
            _ => NodeKind::Root,
        }
    }
}
