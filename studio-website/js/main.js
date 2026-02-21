<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2113.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
  </style>
</head>
<body>
<p class="p1">document.addEventListener("DOMContentLoaded", () =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const cards = document.querySelectorAll(".project-card");</p>
<p class="p1"><span class="Apple-converted-space">  </span>cards.forEach(card =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">    </span>card.style.opacity = 0;</p>
<p class="p1"><span class="Apple-converted-space">    </span>card.style.transform = "translateY(20px)";</p>
<p class="p1"><span class="Apple-converted-space">    </span>setTimeout(() =&gt; {</p>
<p class="p1"><span class="Apple-converted-space">      </span>card.style.transition = "opacity 0.6s ease, transform 0.6s ease";</p>
<p class="p1"><span class="Apple-converted-space">      </span>card.style.opacity = 1;</p>
<p class="p1"><span class="Apple-converted-space">      </span>card.style.transform = "translateY(0)";</p>
<p class="p1"><span class="Apple-converted-space">    </span>}, 100);</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p1">});</p>
</body>
</html>
