## Name
Command Copy!

## Overview
"Command Copy!" is a tool working on chrome extension and you can use commands conveniently by setting them in advance.

## Description
You can copy and use commands by only clicking buttons when you set them in advance onto this tool.<br>
Here is the pattern you can set - 1.All fixed value,  2. Input a few part, 3.Reflect the input value into the other parts.<br>
This tool works on chrome extension.

## Usage
1. Download, or clone this package onto your local environment.

2. Create html files and set commands according to the methods below.

    (1)Title<br>
    Use h2 element.<br>
    Write title like sample below.<br>
    ```
    <h2>Write title here.</h2>
    ```

    (2)Heading and Information mark: i mark<br>
    Use h3 element for heading.<br>
    Classify commands and write them under each heading.<br>
    And in the initial state, they are hidden and after clicking heading, they appear.<br>
    About information mark:i mark, write the information of overview of each contents under headings.<br>
    When mouseover the information mark, the content appears.
    ```
    <h3><span>write statement of the heading here.</span><div class = "info-mark">i<span class="info-text">write overview of the contents under headings here.</span></div></h3>
    ```  

    (3)Commands and Copy button<br>
    Write commands and copy button in table elements.
    You can describe commands like three types below.<br>

    (3)-1:Only fixed value<br>
    Surround commands with span element.
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the command here.</span><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```
    (3)-2:Fixed value and voluntary input values<br>
    Surround fixed values with span element and use input elements, type text for volantary values.<br>
    You can describe multiple parts.
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><input type = "text" placeholder = "Write supplementary of input value here."><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```
    (3)-3:Reflect input value to other parts<br>
    Apply the class 'same-value' with input element and name attribute with volantary value.<br>
    Surround the part you want to reflect input value with span elements and apply same value to name attribute with the input element.<br>

    The part with input value
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><input class = "same-value" name = "Use charcter string you like" type = "text" placeholder = "Write supplementary of input value here."><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```
    The part with reflect input value
    ```
    <tr><th>Write the explanation of the command here.</th><td><span>Write the fixed value in the span elements here.</span><span class = "same-value text-danger" name = "Use the same charcter string of the name attribute of input value"></span><div class="cp_tooltip"><button type="button" class="btn-warning text-white">Copy</button><span class="cp_tooltiptext">Copy!</span></div></td></tr>
    ```


3. Add html files you made into the downloaded package.

4. Write path to the files you add onto popup.html.

5. Add the package into Chrome Extension.

6. Click the icon:top is default and select a link on the popup, you can open the page.

7. Slide down by clicking heading and copy and use the commands by clicking the Copy button.

## Remarks
As templates, template_en.html for English and template_ja.html for Japanese are packaged.
As samples, for git commands:rebase and delete branch are packaged.

## Author
CHI-3
