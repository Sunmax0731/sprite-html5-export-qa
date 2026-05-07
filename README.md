# スプライト・HTML5書き出し検品

sprite-html5-export-qa は、AdobePlugin 領域の NON PICKUP Rank 11 アイデアをクローズドアルファとして実装したローカルファーストの検証ツールです。

## 目的

アニメ素材は再生範囲やループのミスが、ゲームやWeb組み込み後に見つかりやすい。

このリポジトリでは、フレーム範囲、ループ、透明背景、スプライトシート、HTML5書き出しを確認する。 ための入力正規化、代表シナリオ検証、レビュー判断、レポート出力、導入・手動テスト手順、QCDS 証跡を一式で管理します。

## クローズドアルファ範囲

- 中核ロジック: `src/core`
- 入力検証: `src/validators`
- レポート生成: `src/report`
- 判断モデル: `src/review-model`
- CLI: `src/cli`
- ホスト/UI adapter: `src/host-adapter/adobe-host-adapter.js`
- 代表サンプル: `samples/representative-suite.json`

## 実行

```powershell
npm test
npm run validate
npm run build
```

## 公開位置づけ

- Version: v0.1.0-alpha.1
- GitHub prerelease: closed alpha
- 手動テスト: Codex 側では未実施。ユーザー実施用の手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記録。
- 主な公開先: BOOTH / GitHub Release

## 差別化

書き出し後の利用先を意識し、プレビューと命名規則を同時に検査する。
