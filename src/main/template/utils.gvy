def releases(projectDir, layout) {
  return layout.files(new File("$projectDir/docs/archives").listFiles()).collect().stream().map{
    file -> file.name.replace("hi2txt@","").replaceAll("@.*","")}.distinct().collect().sort().reverse();
}

def javaArchives(projectDir, layout, release) {
  return layout.files(new File("$projectDir/docs/archives").listFiles()).collect().stream().filter{
    file -> file.name.contains("Java") && file.name.contains("@"+release+"@")}.collect();
}

def csharpArchives(projectDir, layout, release) {
  return layout.files(new File("$projectDir/docs/archives").listFiles()).collect().stream().filter{
    file -> file.name.contains("CSharp") && file.name.contains("@"+release+"@")}.collect();
}

def formatSize(long v) {
  if (v < 1024) return v + " B";
  int z = (63 - Long.numberOfLeadingZeros(v)) / 10;
  return String.format("%.1f %sB", (double)v / (1L << (z*10)), " KMGTPE".charAt(z));
}

def GTM() {
  return '''\
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGB744P');</script>
<!-- End Google Tag Manager -->"
'''
}

def GTMNoScript() {
  return '''\
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGB744P"
               height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
'''
}