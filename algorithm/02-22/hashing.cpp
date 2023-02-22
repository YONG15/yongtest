// #include <iostream>
// #include <unordered_map>
// using namespace std;

// // hash map
// // C++에서 쓸수있는 map의 종류는 두개가 있다. 
// // #1. unordered_map // <-얘를 쓰세요 (정렬되지 않은 맵)
// // -> hash-table 구조를 이용
// // -> 만들고, 삭제, 탐색 O(1)~O(logN)
// // string의 데이터를 전부 변환 

// // #2. map <-- 정렬된 맵 
// // -> red-black tree 
// // -> 새로 만들고, 삭제, 탐색 -> O(logN)
// // 비교적으로 양이 많은 경우 불리하다
// // string을 key로 쓸때

// int main() {
//     // MAP = 고유의 키 값을 가진다.
//     // 이미 존재하는게 있다면 -> 덮어씌워지는게 아니라
//     // 무시하게 됩니다. 
//     int arr[] = { 1, 200000000, 200000000, 1, 5 };
//     // MAP 생성
//     // unordered_map<key type, value type>
//     unordered_map<int, int>um; 

//     /*
//     for (int i = 0; i < 5; i++) {
//         um.insert({ arr[i], i});
//     }
    
//     cout << um[200000000];
//     */

//     for (int i = 0; i < 5; i++) {
//         // 만약 이미 MAP에 키가 등록되어있다면
//         // 해당 키값에 연결된 value + 1
//         // find(값) -> 없으면 um.end()
//         if (um.find(arr[i]) != um.end()) {
//             um[arr[i]]++; 
//         }
//         // 만약 key가 없다면 
//         // 새로 찾은 숫자 = value = 1 
//         else {
//             // inset(key, value); 
//             um.insert({ arr[i], 1 });
//         }
//     }
//     // 1. 뭐가 출력될까?
//     // 2. map에 존재할까? 
//     // um[key] -> key가 생성 됩니다. 
//     // cout << um[3]; 
    
//     // 기존에 3이라는 key가 없어도 만들어진다. 
//     um[3] = 1; 
//     int de = 1;
//     cout << um[3] << '\n';

//     // traversal / iteration 
//     // 시간이 꽤 걸립니다
//     for (auto it = um.begin(); it != um.end(); it++) {
//         cout << it->first << " " << it->second << '\n';
//     }
// }

/////////////////////////////////////////////////////////////////////////////////
// #include <iostream>
// #include <algorithm>
// #include <map>
// #include <unordered_map>
// #include <string>
// using namespace std;

// string arr[] = { "HI", "HI", "GGG", "HI", "GGG" };

// unordered_map<string, int> um;

// int main()
// {    
//     //문자열 하나 입력받고, 그 문자열이 배열에 몇개 있는지 출력하는
//     //프로그램 작성하기
//     //입력 받기 전 사전 세팅 (빠른 검색을 위한 초기화)
//     for (int i = 0; i < 5; i++) {
//         um[arr[i]] += 1;
//     }

//     string str = "BBQ";

//     if (um.count(str) == 0) {
//         cout << "없네~";
//     }

//     if (um[str] == 0) { //등록되지 않은 키 값을 읽으면, 바로 add된다.
//         cout << "없넹";
//     }
//     if (um.count(str) == 0) {
//         cout << "없네~";
//     }

    

//     return 0;
// }
///////////////////////////////////////////////////////////////////////////////////////////
// #include <iostream>
// #include <algorithm>
// #include <map>
// #include <unordered_map>
// #include <string>
// using namespace std;

// unordered_map<string, string> d1, d2;

// int main()
// {    
//     d1["jodan"] = 63;
//     d2["63"] = "jodan";

//     d1["park"] = "11";
//     d2["11"] = "park";

//     string str;
//     cin >> str;

//     if (d1.count(str) > 0) cout << d1[str];
//     if (d2.count(str) > 0) cout << d2[str];


//     return 0;
// }
//////////////////////////////////////////////////////////////////////////
// #include <iostream>
// #include <algorithm>
// #include <map>
// #include <unordered_map>
// #include <string>
// using namespace std;

// struct Node {
//     int age;
//     string name;
//     string iq;
// };

// unordered_map<string, Node> um;

// int main()
// {    
//     um["56"] = { 15, "SO", "56" };
//     um["SO"] = { 15, "SO", "56" };

//     um["60"] = { 66, "GO", "60" };
//     um["GO"] = { 66, "GO", "60" };

//     string str;
//     cin >> str;

//     if (um.count(str)) {
//         cout << um[str].name << '\n';
//         cout << um[str].age << '\n';
//         cout << um[str].iq << '\n';
//     }

//         return 0;
// }
////////////////////////////////////////////////////////////////////////////
#include <iostream>
#include <algorithm>
#include <map>
#include <unordered_map>
#include <string>
using namespace std;
struct Node {
    int y, x;
};

unordered_map<int, vector<Node>> um;

int main()
{
    int arr[3][3] = {
        15, 11, -7,
        55, -7, 11,
        -7, -55, -9
    };

    for (int y = 0; y < 3; y++) {
        for (int x = 0; x < 3; x++) {
            um[arr[y][x]].push_back({ y, x });
        }
    }

    int tar = -7;
    int n = um[tar].size();
    for (int i = 0; i < n; i++) {
        //cout << um[tar][i].y << " , " << um[tar][i].x;
        Node ret = um[tar][i];
        cout << ret.y << "," << ret.x << "\n";
    }
    
    return 0;
}