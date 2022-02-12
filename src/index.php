<?php
    $locale = locale_accept_from_http($_SERVER['HTTP_ACCEPT_LANGUAGE']);
    $lang = locale_get_primary_language($locale);
    $languages = array("en", "bg");
    $location = in_array($lang, $languages) ? $lang : $languages[0];
    header("Location: $location/", true);
?>