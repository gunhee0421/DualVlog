import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {List} from "postcss/lib/list";

let code = `
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

const int SIZE = 51;
const int MAX = 999888777;

int board[SIZE][SIZE];
int dp[SIZE][SIZE];
bool check[2501];

int main(int argc, char** argv)
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    // freopen("sample_input.txt", "r", stdin);

    int T;
    cin >> T;
    for (int TC = 1; TC <= T; ++TC) {
        // Input
        int N, K;

        cin >> N >> K;
        for (int i = 1; i <= N; ++i) {
            for (int j = 1; j <= N; ++j) {
                dp[i][j] = MAX;
            }
        }

        fill(check, check + 2501, false);

        for (int i = 1; i <= N; ++i) {
            for (int j = 1; j <= N; ++j) {
                cin >> board[i][j];
                if (board[i][j] == 1) dp[i][j] = 0;
                check[board[i][j]] = true;
            }
        }

        // Solve
        bool possible = true;
        for (int i = 1; i <= K; ++i) {
            if (!check[i]) {
                possible = false;
                break;
            }
        }

        if (possible) {
            for (int ck = 1; ck < K; ++ck) { // board check
                for (int cy = 1; cy <= N; ++cy) {
                    for (int cx = 1; cx <= N; ++cx) {
                        if (board[cy][cx] != ck) continue;
                        for (int ny = 1; ny <= N; ++ny) { // dp
                            for (int nx = 1; nx <= N; ++nx) {
                                if (board[ny][nx] == ck + 1) {
                                    dp[ny][nx] = min(dp[ny][nx], dp[cy][cx] + abs(ny - cy) + abs(nx - cx));
                                }
                            }
                        }
                    }
                }
            }

            // Output
            int res = MAX;
            for (int i = 1; i <= N; ++i) {
                for (int j = 1; j <= N; ++j) {
                    if (board[i][j] == K && dp[i][j] < res) {
                        res = dp[i][j];
                    }
                }
            }
            cout << '#' << TC << ' ' << res << '\\n';
        } else cout << '#' << TC << ' ' << -1 << '\\n';
    }
    return 0;
}`;

let text = `
입력으로 주어진 정사각형 타일 바닥(board)에 적혀있는 번호에 대해 1부터 K까지 1씩 증가하는 타일로 이동하는 dp문제다.
이동거리는 문제에서 주어진 조건 대로 구할 수 있다.
총 거리의 최솟값을 구해야 하기 때문에 N*N 크기의 dp배열의 모든 요소를 최댓값으로 저장해주자.
board를 입력받으며, 타일의 번호( board[i][j] )가 1인 경우에는 시작점 이므로 dp[i][j]를 0으로 해주자.
또한, 타일의 번호가 1~K의 모든 수가 나온다는 보장이 없다. 따로 확인해주자.
입력을 다 받은 후, 게임이 가능한지 확인하자. 1 ~  K 번호의 타일들이 존재하는지 확인하면 된다.
만약 1 ~ K 중 하나라도 존재하지 않는다면 게임이 불가능하다. -1 을 출력하고 끝내면 된다.

게임이 가능하다면, 현재 탐색 위치에서 다음 탐색 위치까지 거리의 최솟값을 갱신해주면 된다.
단, 타일의 번호가 증가하는 순서대로 갱신을 해주어야 한다. 현재 탐색 대상인 타일 번호가 아니면 건너뛰자.
탐색 대상 타일이라면, 현재 위치로부터 N*N 공간에서 다음 타일(ck + 1) 을 재탐색 해주자.
다음 타일을 찾았다면, 해당 타일의 이동 거리를 최솟값으로 갱신해주면 된다.
탐색과 갱신이 끝났다면, 타일의 번호가 K인 위치를 찾아 dp에 저장된 이동거리 합의 최솟값을 출력하면 된다.
단, 타일은 여러개 있을 수 있으며 이동거리 또한 각자 다를 수 있다. 가장 작은 합을 출력해주자.
`;
let map = new Map();
map.set("총 거리의 최솟값을 구해야 하기 때문에 N*N 크기의 dp배열의 모든 요소를 최댓값으로 저장해주자", `for (int i = 1; i <= N; ++i) {
            for (int j = 1; j <= N; ++j) {
                dp[i][j] = MAX;
            }
        }`);

// reduce의 동작을 설계하는 부분
export const textSlice = createSlice({
    name: 'data',
    initialState: {
        code: code,
        text: text,
        map: map
    },
    reducers: {
        connect: (state, action: PayloadAction<List>) => {
            const data = action.payload;
            map.set(data[0], data[1]);
        }
    }
})
export const {connect} = textSlice.actions;
export default textSlice.reducer;