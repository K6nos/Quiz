const questions = [
    {//1
        question: "５円玉と５０円玉の穴の直径は一緒",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "５０円玉:4.4mm,５円玉:5.4mm"
    },
    {
        question: "鮭は赤身魚である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"白身魚。身が赤く見えるのは、餌であるエビやカニにカロテノイド系の色素が含まれているためです。"
    },
    {
        question: "板チョコに溝がある理由は割りやすくするためにある",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"溝があるのは、効率よく冷やして一度にたくさんのチョコを作るため。"
    },
    {
        question: "とうもろこしの粒は必ず偶数である",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"成長する過程でそれぞれの粒が２つに分裂するため必ず偶数になる。"
    },
    {
        question: "もっとも発行部数が多い漫画はワンピースである",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"１位ワンピース:５億１０００部\n２位ゴルゴ１３:３億部\n３位名探偵コナン:２億７０００万部"
    },
    {
        question: "アラビア砂漠のグーグルマップのストリートビューはラクダを使って撮っている",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"砂漠の環境を壊さないための方法としてラクダが選ばれた。"
    },
    {
        question: "黒いフラミンゴがいる",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"地中海で遺伝子疾患で黒くなったフラミンゴが見つかりました。"
    },
    {
        question: "日本で１番面積が広い市町村は静岡県にある",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"岐阜県高山市が１番面積が広い市町村。\n２番目が静岡県浜松市。"
    },
    {
        question: "ブラジルの首都はリオデジャネイロ",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"ブラジルの首都はブラジリアです。"
    },
    {//10
        question: "日本一面積が広い市町村と日本一面積が小さい香川県\n大きいのは香川県",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"１番面積の広い市町村:2177.67平方km\n香川県:1876.86平方km\n琵琶湖半分ぐらいの差がある。"
    },
    {
        question: "チューリップには毒がある",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"チューリップ全体に毒があります。食べてはいけません。"
    },
    {
        question: "マッチとライター、先に開発されたのはマッチである",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"ライターは1772年に平賀源内によって発明され、マッチは1826年にイギリス人のウォーカーによって発明されました。"
    },
    {
        question: "潮の満ち引きは月が関係している",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"海の潮が満ちたり引いたりするのは、月の引力が海水をひっぱっているからです。"
    },    
    {
        question: "地球の自転速度は変わらない",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"地球は24時間かけて自転しますが、その速度は速くなったり遅くなったり少しずつ変化しています。"
    },    
    {
        question: "コーヒーより紅茶の方がカフェインが多い",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"苦味はコーヒーの方がありますが、カフェインの量は紅茶の方があります。"
    },    
    {
        question: "KFCの「カーネル・サンダース」のメガネには度が入っていない",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"カーネル・サンダースのメガネはだてメガネです。"
    },
    {
        question: "「トマトは野菜か果物か」で裁判が行われた",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"1893年にアメリカで「トマトは野菜か果物か」の裁判がありました。判決は「トマトは野菜」でした。"
    },
    {
        question: "お寿司屋さんでは、醤油のことを「くろ」と呼ぶ",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"お寿司屋さんではしょうゆのことを「むらさき」と呼びます。"
    },
    {
        question: "サンドイッチは人の名前からきている",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"第4代サンドイッチ伯爵の「ジョン・モンタギュー」が、ゲームをしながら片手で食事ができるように考えたのがはじまりです。"
    },
    {//20
        question: "オムライスはフランスで生まれた",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"オムレツはフランス語の「オムレツ」と英語の「ライス」を合わせた、日本発祥の料理です。"
    },
    {
        question: "きゅうりは熟すと黄色になる",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"緑のきゅうりはまだ未熟な状態。熟しすぎると苦味や渋みが増すため、黄色になる前に出荷されています。"
    },
    {
        question: "ジャガイモは茎が変化したものである",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"茎の先端が膨らんでジャガイモになります。"
    },
    {
        question: "おならがくさいスカンクはメスにもてない",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"スカンクはおならのにおいで敵を撃退するため、おならのくささは強さの証。そのためくさいほどモテるんです。"
    },
    {
        question: "ミノムシのメスは一生、「ミノ」から出ない",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"ミノムシのメスは枯れ葉や小枝でできた「ミノ」で生まれ、そのなかで卵を産み一生を終えます。"
    },
    {
        question: "ダンゴムシはごはんを口から食べるが、水はおしりから飲む",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"ダンゴムシは大量の水を飲むとき、必ずおしりから飲みます。しかしその理由はわかっていません。"
    },
    {
        question: "シロクマの地肌は黒い",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"シロクマの地肌は黒色です。"
    },
    {
        question: "シロクマの毛は白い",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"シロクマの毛は透明。光に反射して白く見えています。"
    },
    {
        question: "パンダの尻尾は黒色である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"パンダの尻尾は白色です。"
    },
    {
        question: "バッタは脚で音を聞く",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"バッタは脚で音を聞きます"
    },
    {//30
        question: "ハエは味覚を脚で感じる",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"ハエは脚で味覚を感じます。"
    },
    {
        question: "メガネザルは目を動かすことができない",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"メガネザルは目が大きすぎて動かすことができません。"
    },
    {
        question: "ウシは1日に18リットルのヨダレを出す",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"ウシは1日に１８０リットルのヨダレを出します。"
    },
    {
        question: "ヒトとサルの遺伝子の違いは10%である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"ヒトとサルの遺伝子の違いは1%。99%は同じ。"
    },
    {
        question: "馬には人間と同じ４種類の血液型がある",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"馬の血液型は主に「A・C・D・K・P・Q・U・T」の8種類。 さらに細かく分類すると3兆通りもあります。"
    },
    {
        question: "筋肉を動かすときは酸素を使う",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"マラソンなどで息が苦しくなるのは、たくさんの筋肉を使うからです。"
    },
    {
        question: "ウナギの「並」「上」「特上」は質の違いである",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"ウナギの「並」「上」「特上」は量の違いで決まります。"
    },
    {
        question: "５００円玉のギザギザは、目の不自由な人がわかるようについている",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"500円玉の縁のギザギザは、偽造防止や硬貨最高額の象徴のためにあります。"
    },
    {
        question: "アメリカの宇宙飛行士は宇宙から選挙に投票できる",
        answers: ["〇", "✖"],
        correct: 0,
        explanation:"アメリカの宇宙飛行士は、宇宙からメールで投票できます。"
    },
    {
        question: "天気予報で使われる「日中」とは、8:00〜15:00までのことである",
        answers: ["〇", "✖"],
        correct: 1,
        explanation:"天気予報で使われる「日中」とは、9:00〜18:00までのことです"
    },
    {
        question: "古代エジプトには自動販売機があった",
        answers: ["〇", "✖"],
        correct: 0,
        explanation: "自動販売機は世界最古と言われており、コインを入れると重みで内部の受け皿が傾いて、蛇口から水が出てくる仕組みでした。"
    },
    {
        question: "ハムスターが1日に走る距離は10km以上である",
        answers: ["〇", "✖"],
        correct: 0,
        explanation: "1日に走る距離はなんと10km〜20km！"
    },
    {
        question: "イカの脚は10本である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "イカの脚は10本だと言われていますが、じつは8本。残りの2本は獲物を捕まえるための手（触腕）なんだそうです！"
    },
    {
        question: "ラクダのコブは筋肉である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "体に必要な栄養を脂肪に変えて、こぶのなかに溜め込んでいます。"
    },
    {
        question: "南極でかかりにくい病気は頭痛である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "ウィルスは寒さに弱いため南極の探検隊は風邪をひきにくいと言われています。"
    },
    {
        question: "コンビニよりたくさんある病院は眼科である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "色々な場所にあるコンビニですが、それ以上に歯医者さんは多くあります。"
    },
    {
        question: "ドラえもんがのび太の家に来て最初に食べたものはおもちである",
        answers: ["〇", "✖"],
        correct: 0,
        explanation: "第一話の設定はお正月で「うまいもんだなあ。生まれてはじめて食べた。」と言っています。"
    },
    {
        question: "1日のうち、一番たくさん雨が降った都道府県は高知県である",
        answers: ["〇", "✖"],
        correct: 1,
        explanation: "1976年の統計開始以来、一日に雨が一番降ったのは神奈川県の箱根市。2019年10月12日に922.5mm降りました。"
    },
    {
        question: "1日のうち、一番雪が積もった都道府県は滋賀県である",
        answers: ["〇", "✖"],
        correct: 0,
        explanation: "1976年の統計開始以来、一日に雪が一番降ったのは滋賀県の伊吹山。1927年2月14日に1182cm積もりました。"
    },
    {
        question: "縄文人が土器で作っていたものはクッキーである",
        answers: ["〇", "✖"],
        correct: 0,
        explanation: "ドングリなどの木の実に卵や塩を練ってつくられたのではないかと言われています。"
    },
];

let currentQuestionIndex = 0;//問題インデックス初期化

// 問題の出題
function showQuestion() {
    const questionElement = document.getElementById('question');//問題表示
    const answerButtons = document.querySelectorAll('.answer-button');//回答ボタン取得

    questionElement.textContent = selectedQuestions[currentQuestionIndex].question;//問題文
    answerButtons.forEach((button, index) => {
        button.textContent = selectedQuestions[currentQuestionIndex].answers[index];//〇✖
        button.onclick = () => checkAnswer(index);//ボタンがクリックされたときの動作設定
    });
}

// 答え合わせ・解説
function checkAnswer(index) {
    if (index === selectedQuestions[currentQuestionIndex].correct) {
        alert(`正解！\n${selectedQuestions[currentQuestionIndex].explanation}`);//正解メッセージと解説
        currentQuestionIndex++;//次の問題
        if (currentQuestionIndex < selectedQuestions.length) {//問題が残っている場合
            showQuestion();//次の問題
        } else {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('trolley-container').style.display = 'none';
            document.getElementById('success-screen').style.display = 'block';
            stopMusic();
        }
    } else {
        alert('不正解！脱出失敗！');
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('trolley-container').style.display = 'none';
        resetQuiz();
        stopMusic();
    }
}

// 問題をシャッフル
function shuffleQuestions(questions) {
    //フィッシャー・イェーツのシャッフルアルゴリズム "有限列をランダムな別の順序の有限列に並べ直す方法"
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));// 0からiのランダムなインデックスを生成
        [questions[i], questions[j]] = [questions[j], questions[i]];//問題シャッフル
    }
    return questions;
}

// ランダムに10問を出題
function getRandomQuestions(num) {
    const shuffled = shuffleQuestions(questions);//問題シャッフル
    return shuffled.slice(0, num);//上からｎ問取得
}

document.getElementById('restart-button').addEventListener('click', () => {
    document.getElementById('success-screen').style.display = 'none';
    document.getElementById('trolley-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
    resetQuiz();
})

let selectedQuestions = [];// 選択された質問を保持する配列
let quizMusic = document.getElementById('quiz-music'); // 音楽要素取得

document.getElementById('start-button').addEventListener('click', () => {
    selectedQuestions = getRandomQuestions(10);
    currentQuestionIndex = 0;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('trolley-container').style.display = 'block';
    showQuestion();
    playMusic();
});

// 音楽再生
function playMusic() {
    quizMusic.play();
}

// 音楽停止
function stopMusic() {
    quizMusic.pause();
    quizMusic.currentTime = 0;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    selectedQuestions = getRandomQuestions
}
