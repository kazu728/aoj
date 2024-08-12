pub mod binary_tree;
pub mod rooted_tree;
pub mod tree_walk;

use std::cell::RefCell;
use std::cmp::max;
use std::rc::{Rc, Weak};

pub type Parent = Option<Weak<RefCell<BinaryNode>>>;
type Child = Option<Rc<RefCell<BinaryNode>>>;
pub type Children = Vec<Rc<RefCell<BinaryNode>>>;
type RcRefCellNode = Rc<RefCell<BinaryNode>>;

#[derive(Debug)]
pub struct BinaryNode {
    value: i8,
    parent: Parent,
    left: Child,
    right: Child,
}

impl BinaryNode {
    pub fn new(value: i8, parent: Parent) -> Self {
        BinaryNode {
            value,
            parent,
            left: None,
            right: None,
        }
    }
}

impl From<BinaryNode> for RcRefCellNode {
    fn from(node: BinaryNode) -> Self {
        Rc::new(RefCell::new(node))
    }
}

pub fn from_slice(input: &[[i8; 3]]) -> RcRefCellNode {
    generate_tree(input, 0, None)
}

fn generate_tree(input: &[[i8; 3]], id: i8, parent: Parent) -> RcRefCellNode {
    let [value, left, right] = input[id as usize];
    let node = Rc::new(RefCell::new(BinaryNode::new(value, parent)));

    if left >= 0 {
        let left_child = generate_tree(input, left, Some(Rc::downgrade(&node)));
        node.borrow_mut().left = Some(left_child);
    }

    if right >= 0 {
        let right_child = generate_tree(input, right, Some(Rc::downgrade(&node)));
        node.borrow_mut().right = Some(right_child);
    }

    node
}

pub fn get_parent_node_value(node: &RcRefCellNode) -> i8 {
    node.borrow()
        .parent
        .as_ref()
        .and_then(|weak| weak.upgrade())
        .map(|rc| rc.borrow().value)
        .unwrap_or(-1)
}

pub fn calculate_height(node: &RcRefCellNode) -> u8 {
    let node = node.borrow();

    match (&node.left, &node.right) {
        (None, None) => 0,
        _ => {
            let left_height = node.left.as_ref().map_or(0, |left| calculate_height(left));
            let right_height = node
                .right
                .as_ref()
                .map_or(0, |right| calculate_height(right));
            1 + max(left_height, right_height)
        }
    }
}

pub fn calculate_depth(
    current_node: &RcRefCellNode,
    target_node: &RcRefCellNode,
    depth: u8,
) -> Option<u8> {
    let current = current_node.borrow();

    if Rc::ptr_eq(current_node, target_node) {
        return Some(depth);
    }

    current
        .left
        .as_ref()
        .and_then(|left| calculate_depth(left, target_node, depth + 1))
        .or_else(|| {
            current
                .right
                .as_ref()
                .and_then(|right| calculate_depth(right, target_node, depth + 1))
        })
}

pub fn find_siblings_node(node: &RcRefCellNode) -> Option<RcRefCellNode> {
    node.borrow().parent.as_ref().and_then(|weak| {
        weak.upgrade().and_then(|parent| {
            let parent = parent.borrow();
            if let Some(left) = parent.left.as_ref() {
                if !Rc::ptr_eq(left, node) {
                    return Some(Rc::clone(left));
                }
            }
            if let Some(right) = parent.right.as_ref() {
                if !Rc::ptr_eq(right, node) {
                    return Some(Rc::clone(right));
                }
            }
            None
        })
    })
}

pub fn get_children_count(left: &Child, right: &Child) -> u8 {
    match (left, right) {
        (Some(_), Some(_)) => 2,
        (Some(_), None) => 1,
        (None, Some(_)) => 1,
        _ => 0,
    }
}

#[derive(Debug, PartialEq, Eq, Clone)]
pub enum NodeKind {
    Root,
    Internal,
    Leaf,
}

impl NodeKind {
    pub fn new(id: i8, children_count: u8) -> NodeKind {
        match children_count {
            0 => NodeKind::Leaf,
            _ if id != 0 => NodeKind::Internal,
            _ => NodeKind::Root,
        }
    }
}
