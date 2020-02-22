## 名称
Command Copy!

## 概要
あらかじめよく使うコマンドを設定しておくことで、ボタンワンクリックでコピーして使用できるChrome拡張機能用のツールです。

## 説明
コマンドを設定しておくことで、ボタンワンクリックでコピーして使用できます。<br>
設定できるパターンは以下の3通り。<br>
1.全て固定値<br>
2.一部固定値、一部入力<br>
3.入力した値を他の箇所にも反映させて使用<br><br>
※本ツールはChrome 拡張機能用のツールです。

## 使用方法
1. 本ツールをローカル環境にダウンロードします。

2. 以下の手順で、htmlファイルを作成とコマンドの設定を行います。

   (1)タイトル<br>
   h2タグを使用します。
   以下のように、タイトルを記述します。<br>

   ```
   <h2>ここにタイトルを記述</h2>
   ```

    (2)見出し<br>

    見出しは以下のように記述してください。<br>

    ```
    <h3>ここに見出しを記述</h3>
    ```

    (3)見出しとインフォメーション・マーク（iマーク）<br>
    見出しには、h3タグを使用します。<br>
    コマンドを分類し、各々の見出しの下に記述します。<br>
    初期状態では、コマンドは各見出しの下にhiddenされており、見出しをクリックすると出現します。<br>
    インフォメーション・マーク（iマーク）には、各見出し下のコマンド群に関する概要を記述してください。<br>
    iマークにマウスオーバーすると、内容が表示されます。<br>

    ```
    <h3><span>write statement of the heading here.</span><div class = "info-mark">i<span class="info-text">write overview of the contents under headings here.</span></div></h3>
    ```  

    (4)コマンドとコピーボタン<br>
    コマンドとコピーボタンをテーブル要素の中に記述します。<br>
    以下の3タイプ作成できます。<br>

    (4)-1:固定値のみ<br>
    コマンド（固定値）をspanタグで囲みます。<br>

    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the command here.</span><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```

    (4)-2:固定値と任意の入力値<br>
    固定値をspanタグで囲み、任意の値を入力する箇所では、type属性をtextとしたinputタグで囲みます。<br>

    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><input type = "text" placeholder = "Write supplementary of input value here."><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```
    (4)-3:入力値を他の箇所に反映させる<br>
    'same-value' クラスをinput要素に、任意の値をname属性に適用します。<br>
    入力値を反映させたい箇所をspanタグで囲み、name属性に上のinput要素と同じ値を使用します。<br>

    ・入力する箇所
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><input class = "same-value" name = "Use charcter string you like" type = "text" placeholder = "Write supplementary of input value here."><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```
    ・反映させる箇所
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><span class = "same-value text-danger" name = "Use the same charcter string of the name attribute of input value"></span><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```


3. ダウンロードしたパッケージに作成したhtmlファイルを追加します。

4. `popup.html`にファイルパスを記述します。

5. Chrome拡張機能にパッケージを追加します。

6. アイコン（デフォルトはコマ）をクリックし、ポップアップのリンクをクリックすると、コマンドの載ったページが開きます。

7. 見出しをクリックしてコマンド群を表示させ、Copyボタンをクリックして、コマンドをコピー＆使用してください。

## 備考
テンプレートとして、template_en.html（英語用）とtemplate_ja.html（日本語用）が、<br>
サンプルとして、Gitコマンド用（リベース、ブランチの削除）が入っています。

## 著者
CHI-3
