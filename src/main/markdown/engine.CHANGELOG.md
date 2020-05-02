release 1.12@20200503
------
Engine improvement(s)    
+ add a 'corrupted data' detection mechanism to avoid displaying them    

2020-05-02 engine: improve 'corrupted data' detection mechanism error message to display the faulty value    
2020-04-28 engine: add a 'corrupted data' detection mechanism to avoid displaying them      

release 1.11@20200412
------
Engine improvements    
+ add new instruction 'nibble-trim' to decode score    
+ allow xml file without any structure    
+ check "divide by 0" xml instruction
    
2020-03-13 engine: add new instruction 'nibble-trim' to decode score    
2020-03-13 engine: allow xml file without any structure nor output to mark a game as "supported because there is no score inside"    

release 1.10@20190908
------
2019-09-01 engine: add 'byte-trunc' instruction to decode an element.    
It will trunc this element and all bytes after it.    
Ex: "xmultipl" game can save a name shorter than the previous one, but ending the new one with "0x00" without erasing the following bytes.    
data: 42 4F 42 00 48 41 4e 00 00 00    
decoded by: `<elt size="9" type="text" id="NAME" byte-trunc="0x00"/>`    
will read: BOB    
instead of: BOBHAN    
Thanks to contributor T. Busse for this finding!    
2019-08-31 engine: improvement allowing structure file name to match end of hiscore filename, instead of just its extension    
2018-11-29 engine: fix wrong check if file size is specified but not hiscore.dat location    
2018-11-29 utility: new command implementation trial to automatically discover xml description    
2018-10-23 engine: improvement to detect hi file also when nvram file is provided as input    
2018-10-16 engine: minor fix to avoid a crash if charset:char@src value has a length < 2    
2018-10-14 engine: minor fix to avoid a crash if too many data than available are specified in the xml     

release 1.9@20172212
------

release 1.8@20170218
------
2017-01-22 tip: for windows, to display unicode characters in the command prompt: >chcp 65001 + use NSimSun font in console properties    
2017-01-10 engine: support new hiscore.dat syntax ('_' and ':' in cputag, optional prefill, softwarename)    

release 1.7@20160409
------
hi2txt general improvements
+ imp: now compatible with mame 0.172 containing native lua script for hiscore saving, which is providing a new specific hiscore.dat file format
+ imp: add 'sort-format' attribute to 'output table' to apply specific modification allowing the expected sorting (used in kof2001)
+ fix: output table sort attribute is now applying decimal, then string conversion on column values, instead of crashing if values cannot be converted into numbers (used in kof2001)
+ imp: format operation 'sum' can now sum all values of a column (used in kof2001)
   
2016-03-25 engine: support hiscore.lua by borgar@borgar.net    
2015-12-09 engine: add experimental JavaScript support for all 'format' attributes (for the fun, mostly)    
2015-12-07 engine: add 'sort-format' attribute to 'output table' to apply specific modification allowing the expected sorting    
  ex: kof2001.xml    
  ... sort-format="TrimR%"    
2015-12-06 engine: output table sort attribute is now applying decimal, then string conversion on column values, instead of crashing if values cannot be converted into numbers.    
2015-12-05 engine: format operation 'sum' can now sum all values of a column    
  ex: kof2001.xml    
  `<sum><column id="WIN CHARACTER"/></sum>`    

release 1.6@20151127
------
+ front-end integration
  + HyperSpin (done if executable is renamed HiToText)
  + RocketLauncher for HyperSpin (done)
  + GameEx (on-going)
+ hi2txt general improvements
  + imp: add -xml parameter allowing to display data in XML, for easier front-end integration (requested by GameEx team)
  + imp: output table now accepts 'display' attribute
  + fix: divide operation is now using a scale factor to avoid "non-terminating decimal expansion" error
  + imp: operations can now use a unique field value to work on all values of a table column (ex: kof97)
  + imp: nvram file is now supported as argument of hi2txt
  + fix: display table columns and values even if all columns are using "format" or "src" attributes to build their values

2015-11-25 engine: output table now accepts 'display' attribute    
2015-11-25 engine: divide operation is now using a scale factor to avoid "non-terminating decimal expansion" error    
2015-11-25 engine: operations can now use a unique field value to work on all values of a table column (ex: kof97)    
2015-11-25 engine: nvram file is now supported as argument of hi2txt    
   .../hi/kof96.hi    
   .../hi/kof96    
   .../nvram/kof96/saveram <= new!    
   .../nvram/kof96    
   .../nvram/kof96.nv    
   kof96 (if related working directory is used)    
2015-11-21 engine: display table columns and values even if all columns are using "format" attribute to build their values    
2015-11-18 engine: display table columns and values even if all columns are using "src" attribute to build their values    
2015-11-04 engine: add -xml parameter allowing to display extracted data in XML format, targeting easier front-end integration like GameEx    

release 1.5@20151003
------
+ hi2txt general improvements
  + decoding speed significantly improved
  + xml files now bundled as one zip for easier installation
  + now compatible with HyperSpin -> installation guide:
    + 1.copy hi2txt.exe and hi2txt.zip in the same folder than HyperSpin.exe
    + 2.rename hi2txt.exe into HiToText.exe

2015-10-03 engine: improve decoding speed (564 testcases done in 1mn30s instead of 10mn)    
2015-10-03 engine: now compatible with HyperSpin    
  -l parameter can work without using -hiscoredat parameter    
  -r parameter displays output readable by HyperSpin (all lines displayed in one call)     
  do not forget to rename hi2txt.exe into HiToText.exe as HyperSpin doesn't understand currently this new name    

release 1.4@20150912
------
  + hi2txt general improvements:
    + a native C# version exists!
    + output customization and filtering, through command-line parameters (see doc for more information):
-score-grouping, -score-grouping-separator, -score-grouping-size
-keep-field, -keep-table-value, -keep-first-score, -keep-first-table, -hide-field
-max-lines, -max-columns
    + support Unicode characters
    + all XML can be stored inside a hi2txt.zip file
    + unknown clone is extractable if at least one games of the same family (see hiscore.dat content) is supported
  + XML engine improved, for easier 'hi/nvram' files description:
    + multiple structure, output and link between them can be defined for the same game, to support different versions of hiscore.dat

2015-09-12 engine: there are now 2 versions of hi2txt => Java and C#!    
2015-09-12 engine: minor modifications to ease the C# version    
2015-09-10 engine: support a hi2txt.zip file to store all XML descriptions    
2015-09-10 engine: support a game hiscores file if at least one member of the same hiscore.dat family is already supported    
  it avoids to explicitely create the related 'sameas' xml file, i.e. automatic clones support    
2015-05-11 engine: do not display output field if the related value is not found or empty    
2015-05-09 engine: 'structure' object, describing how to extract the data, can be bow linked to a specific 'output' object, dscribing how to display the extracted data    
  for 'fixeight' game , the improved structure needs a new output, and this feature allows to keep retro-compatibility with older version of hiscore.dat
```
  <hi2txt>    
    <structure output="o1">...</structure>    
    <structure output="o2">...</structure>    
    <output id="o1">...</output>    
    <output id="o2">...</output>    
  </hi2txt>
```    
2015-01-01 engine: field are now always taking into account the attribute 'display' to be displayed or not    
2014-10-13 engine: allow output customization and filtering    
Split SCORE by group of integers, to easily identify very big score
+ -score-grouping "yes|no"             (default: no)
+ -score-grouping-separator "`<string>`" (default: ".")
+ -score-grouping-size `<integer>`       (default: 3)
```
example:
SCORE|NAME
10000000|CAP
9000000|COM

-score-grouping yes
SCORE|NAME
10.000.000|CAP
9.000.000|COM

-score-grouping yes -score-grouping-separator ","
SCORE|NAME
10,000,000|CAP
9,000,000|COM

-score-grouping yes -score-grouping-separator "," -score-grouping-size 2
SCORE|NAME
10,00,00,00|CAP
9,00,00,00|COM
```
Filter lines to keep only lines having a specific column value, allowing for example to keep only your own score
+ -keep-field "`<field_name>`" (this arg can be repeated to declare multiple values)
+ -keep-table-value  "`<Field>:<value>`" (this arg can be repeated to declare multiple values)
+ -keep-first-score "`<yes|no>`" (force to keep first line, even if not in the scope of -keep-table-value)
+ -keep-first-table "`<yes|no>`" (display only the 1st table)
+ -max-lines `<integer>` (display only `<integer>` lines in a table)
+ -max-columns `<integer>` (display only `<integer>` columns in a table)
```
example:
SCORE|NAME
10000000|CAP
9000000|COM
8000000|CAP

-keep-table-value "NAME:COM"
SCORE|NAME
9000000|COM

-keep-table-value "NAME:COM" -keep-first-score
SCORE|NAME
10000000|CAP
9000000|COM
```
Filter columns to hide one (this arg can be repeated to declare multiple values)
+ -hide-field "`<field_name>`"
```
example:
SCORE|NAME
10000000|CAP
9000000|COM
8000000|CAP

-hide-field "NAME"
SCORE
10000000
9000000
8000000
```
2014-10-08 engine: fix CS_NUMBER charset usage, now usable without any other charset defined    
2014-10-05 engine: display Unicode characters correctly on output console    

release 1.3@20141004
------
+ XML engine improved, for easier 'hi/nvram' files description:
  + new format operation 'divide_round'
  + new format operation 'round'
  + new format operation 'capitalize'
  + new format operation 'lowercase'
  + new format operation 'loopindex'
  + new @direction="both" for format operation 'trim'
  + lot of new implicit format syntaxes
  + minor improvements and fixes

2014-10-04 engine: add format/trunc implicit format
```
<column ... format="Trunc">
or <column ... format="T">
```
2014-09-17 engine: add format/loopindex operation, which is setting the input data value to the loop index, if inside a loop, but after table_index usage    
this operation bypass any other operation set before or after itself
`<format><loopindex/></format>`    
with a related implicit format:    
`<column ... format="LoopIndex">`    
see inthunt.xml: structure/POINTER    
2014-09-17 engine: when not displaying an output field (display="extra|debug"), it can still be used to sort the output table or other operations        
           see inthunt.xml: output/table@sort, output/table/POINTER    
2014-09-16 engine: improve decoding of truncated data    
2014-09-13 engine: do not display output/table header if all lines are not displayed    
             it allows to better support a clone for which all data (versus its parent) are not extracted    
           see cosmccop.xml with 'gallop' game    
2014-09-13 engine: allow empty value for output/table@line-ignore, matching either empty or null table value    
             it allows to ignore lines referencing a non-existing table column (meaning related value is null)    
2014-09-13 engine: fix format/pad to not crash with unknown column/field    
2014-09-13 engine: fix output/column to select data from @src first (if it exists), then @id    
             it allows to support 2 columns with the same id in two different output tables, one related to the input data of the same id, the other using @src    
           see cosmccop.xml    
2014-09-11 engine: add format/capitalize to put the 1st character of a string in uppercase    
             `<format><capitalize/></format>`    
           with a related implicit format:    
             `<column ... format="Capitalize">`    
2014-09-11 engine: add format/lowercase format    
             `<column ... format="LC"> or <column ... format="LowerCase">`    
2014-09-11 engine: add format/uppercase implicit format    
             `<column ... format="UC"> or <column ... format="UpperCase">`    
2014-09-11 engine: modify format/uppercase to put all the string in uppercase, not only the 1st letter    
2014-09-11 engine: add format/prefix implicit format    
             `<column ... format="Prefix<string>">`    
             ex: `<column ... format="PrefixSTG">` => add prefix 'STG'    
2014-09-11 engine: add format/suffix implicit format    
             `<column ... format="Suffix<string>">`    
             ex: `<column ... format="Suffix%">` => add suffix '%'    
           see 1944.xml    
2014-09-11 engine: add format/pad implicit format    
             `<column ... format="Pad<pad_direction:L|R><trim_char>">`    
             ex: `<column ... format="PadL20">` => pad left,  max = 2, using '0'    
             ex: `<column ... format="PadR4 ">` => pad right, max = 4, using ' '    
           see uopoko.xml    
2014-09-11 engine: add format/trim implicit format    
             `<column ... format="Trim<trim_direction:L|R><trim_char>">`    
             ex: `<column ... format="Trim0">`  => trim '0' on both sides    
             ex: `<column ... format="TrimL0">` => trim left '0'    
             ex: `<column ... format="TrimR ">` => trim right ' '    
           see airass.xml    
2014-09-11 engine: add a new possible direction 'both' for format/trim, allowing to trim left and right    
2014-09-09 engine: add format/round operation, allowing to round a decimal value    
             round: 96.6666 R 97    
             `<format><round/></format>`    
           related shortcut:    
             `<column ... format="Round"/>`    
             or `<column ... format="R"/>`    
           updated hi2txt.dtd    
2014-09-09 engine: add format/divide_round operation, allowing to round the result instead of truncating it    
             divide:       5800 / 60 => 96.66666    
             divide_trunc: 5800 d 60 => 96    
             divide_round: 5800 D 60 => 97    
             `<format><divide_round>60</divide_round></format>`    
           related shortcut: `<column ... format="D60"/>`    
           updated hi2txt.dtd    
           see mushitam.xml format@id="time"    

release 1.2@20140901
------
+ XML engine improved, for easier 'hi/nvram' files description:
  + japanese Hiragana defined as entities
  + add pre-defined charset for number
  + new operation 'uppercase' is supported for format
  + new operation 'shift' is supported for format
  + new attribute 'skip-first-bytes' and 'skip-last-bytes' for loop
  + different groups of 'case' are supported inside the same format definition
  + new attribute 'empty' and 'consume' for prefix and suffix operations
  + minor fixes

2014-08-31 add japanese hiragana into hitotxt.dtd    
             see guwange.xml    
2014-08-31 add format/uppercase operation to put the first letter of a string in upper case    
             see guwange.xml    
2014-08-31 charset/char@default is now working    
2014-08-25 add loop@skip-last-bytes allowing to define a loop where x last bytes of the last iteration have been skipped    
           see ket.xml    
2014-08-25 add loop@skip-first-bytes allowing to define a loop where x first bytes of the first iteration have been skipped    
           see ket.xml    
2014-08-24 method to get application root modified because of Unix non-compliance optional -descr parameter is perhaps now really optional :) )    
2014-08-24 protect format@divide from non-integer result and provide user-friendly error message    
2014-08-22 add prefix@empty to define what is considered as empty to apply or not this prefix    
           add prefix@consume to define what to do in case of empty input: return input as-is (consume="no" => default) or do not return anything (consume="yes")    
           add suffix@empty, suffix@consume    
           see tgm2.xml format@id="medal_ac"    
2014-08-22 add shift operation    
             `<shift>integer</shift>`    
             also in possible using implicit format; ex: `<column ... format=">2">`    
           see tgm2.xml format@id="medal"    
2014-08-22 format/case(s) ordering taken into account. multiple different case groups possible inside the same format    
           see tgm2.xml format@id="medal_ac"    
2014-08-22 trim/concat/pad/prefix/replace/suffix operations return "" instead of null if input = ""    
2014-08-22 operations contained in a format where input-as-subcolumns-input="yes" but without declaring themselves any colum/field ignore input-as-subcolumns-input and have the regular input    
           it allows to chain operations in the same format, operation n2 taking the result of operation n1, if operation n2 doesn't have an explicit column/field itself    
           see tgm2.xml format@id="medal"/trim    
2014-08-21 add pre-defined charsets, to reduce custom charset definition    
           a pre-defined charset can be called from the elt@charset attribute, additionally to a custom charset    
             `<elt ... charset="CS_XXX" ... >`    
             `<elt ... charset="CS_XXX;<custom_charset_id>" ... >`    
           a call to a pre-defined charset can override the start offset and the delta to add to the current step between each char    
             `<elt ... charset="CS_XXX[<offset>]" ... >`    
             `<elt ... charset="CS_XXX[<offset>,<delta>]" ... >`    
             `<elt ... charset="CS_XXX[<offset>,<delta>];<custom_charset_id>" ... >`    
           the pre-defined charset 'CS_NUMBER' has been added    
           ex: sbomber.xml    
             `<elt ... charset="CS_NUMBER[-14];sbomber" ... >`    

release 1.1@20140809
------
+ better format@formatter possibilities
+ new 'txt' element for better XML readibility
+ minor fixes

2014-08-04 add new 'txt' element for 'concat' format operation, allowing clearer notation to concatenate hard-coded text (see 'kingdmgp' game)    
2014-08-04 improve possibility of format@formatter allowing '%[flags][width][.precision]conversion' instead of just '%conversion'    
2014-08-04 fix format@formatter to catch formatting exception, improving error reporting    
2014-08-03 charset/char@dst is now able to store a string instead of one character (see 'gigawing', 'fixeight' games)    
2014-08-03 table@lines-max is now taking into account potential table@line-ignore (see 'bgareggabl' game)    
2014-07-28 avoid a null pointer exception if a trim format is applied on a non-existing column occurences    

release 1.0@20140725
------
2014-07-25 allow implicit format for elt@format and elt@table-index-format, remove code duplication to handle formats between elt and column/field    
2014-07-23 when an output field is applied on an unknown input field, using a format/case, there is no more a null pointer exception    
2014-07-19 add new byte-skip flavors to experimental finder utility    
2014-07-19 add 4 new byte-skip flavors: 1000, 0100, 0010, 0001 (see 'espgal' example and doc)    
2014-07-17 when format F1 uses format F2, F2 can be defined after or before F1 (only 'after' was allowed previously)    
2014-07-15 add a new experimental utility allowing to find text or integers in a file, mainly combining all possibilities at all locations inside the file    
           `java -jar hi2txt.jar find <file> <target>`    
           ex: `java -jar hi2txt.jar find ../mame/hi/espgal.hi "WKB"`    
           number of trials can be reduced by forcing a specific value for a parameter    
           ex: `java -jar hi2txt.jar find -ascii-step 4 ../mame/hi/espgal.hi "WKB"`    
           it will be deeply explained in the doc when more mature :)    
(not recorded)    