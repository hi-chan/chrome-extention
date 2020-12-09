$(function () {
  console.log("コンテントスクリプトだよ");
  const reg = new RegExp(/(Extensions)/, "gi");
  const $bodyText = $("body").html();
  $("body").html(
    $bodyText.replace(
      reg,
      "<span style='background-color: lightblue'>$1</span>"
    )
  );
});
