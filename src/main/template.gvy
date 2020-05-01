String snippet(projectDir, name) {
  // force projectDir as string avoiding further unexpected casting to file
  String dir = projectDir
  return new File(dir+"/src/main/snippet/"+name+".snippet").getText()
}
