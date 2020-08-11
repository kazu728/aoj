#include <vector>
#include <gtest/gtest.h>
#include "rooted_tree.hpp"

using namespace std;

TEST(RootedTreeTest, is_right_answer) {

    const InputType input ={
        { 13 },
        { 0, 3, 1, 4, 10 },
        { 1, 2, 2, 3 },
        { 2, 0 },
        { 3, 0 },
        { 4, 3, 5, 6, 7 },
        { 5, 0 },
        { 6, 0 },
        { 7, 2, 8, 9 },
        { 8, 0 },
        { 9, 0 },
        { 10, 2, 11, 12 },
        { 11, 0 },
        { 12, 0 }
    };
    ASSERT_EQ(search(input), 10);
}