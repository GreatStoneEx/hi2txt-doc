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
