$(function () {

    //for jsfiddle so its mobile friendly.
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1" />');

    var $alert = $($(".alert")[0]);
    var $p = $($(".progress")[0]);
    var $b = $($("[type='submit']")[0]);
    var $d = $("#btn_enabled");
    var $t = $("#progress-value");

    $p.on("sliderchange", function (e, result) {
        $alert.html("action: " + result.action + ", value: " + result.value);
    });

    $p.on("slidercomplete", function (e, result) {
        console.log('slider completed!');
    });
    

    $b.on('click', function (e) {

        var value = parseFloat($t.val());
        $p.slider("option", "now", value);

        return false;
    });

    $d.on('click', function () {
        if (!$d.hasClass('active')) {
            $d.text('Disabled ');
            $p.slider("option", "disabled", true);
        } else {
            $d.text('Enabled');
            $p.slider("option", "disabled", false);
        }
    });
});