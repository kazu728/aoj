#include <vector>
#include <stdio.h>
#include "rooted_tree.hpp"
#include <iostream>

using namespace std;

struct Node
{
    int value;
    Node *parent;
    vector<Node> children;
};

vector<Node> answer;


int search(InputType elements_list) {
    Node rootNode;
    for (int i = 1; i < elements_list.size() + 1; i++)
    {
        // root note設定
        if (i == 1) rootNode ={ elements_list[i][0], NULL, {} } ;
       //    ノードがない場合はcontinue
        if (elements_list[i][1] == 0) continue;

        answer.push_back({elements_list[i][0], NULL, {}});

        for (int j = 2; i < (elements_list[i]).size(); i++)
        {
           cout << answer[i].value << endl; 
           answer[i].children = {j, answer[i], {}};
        }
    }

    printf("%s", "デバッグ");
    printf("%s", answer[0]);

    return 10;
}