export const productConfig = {
  "product": {
    "rank": 11,
    "tier": "P0",
    "score": 68,
    "domain": "AdobePlugin",
    "ideaNo": 10,
    "ideaName": "スプライト・HTML5書き出し検品",
    "repository": "sprite-html5-export-qa",
    "publish": "BOOTH / GitHub Release",
    "priorityReason": "ゲーム/Web素材向けに透明、ループ、命名を検査でき、範囲を絞れば実装しやすい。",
    "surface": "Animate 向け host adapter とローカル証跡レポート CLI",
    "integration": "Animate",
    "overview": "フレーム範囲、ループ、透明背景、スプライトシート、HTML5書き出しを確認する。",
    "problem": "アニメ素材は再生範囲やループのミスが、ゲームやWeb組み込み後に見つかりやすい。",
    "differentiation": "書き出し後の利用先を意識し、プレビューと命名規則を同時に検査する。",
    "adobeHost": "Animate",
    "adobeHostReason": "ZIP metadata の integration が Animate で、HTML5/スプライト書き出し検品が中心。"
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
