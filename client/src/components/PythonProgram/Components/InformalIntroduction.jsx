import React from 'react'

const InformalIntroduction = () => {
  return (
    <div class="document">
    <div class="documentwrapper">
      <div class="bodywrapper">
        <div class="body" role="main">
          
<section id="an-informal-introduction-to-python">
<span id="tut-informal"></span><h1><span class="section-number">3. </span>An Informal Introduction to Python<a class="headerlink" href="#an-informal-introduction-to-python" title="Permalink to this headline">¶</a></h1>
<p>In the following examples, input and output are distinguished by the presence or
absence of prompts (<a class="reference internal" href="../glossary.html#term-0"><span class="xref std std-term">&gt;&gt;&gt;</span></a> and <a class="reference internal" href="../glossary.html#term-..."><span class="xref std std-term">…</span></a>): to repeat the example, you must type
everything after the prompt, when the prompt appears; lines that do not begin
with a prompt are output from the interpreter. Note that a secondary prompt on a
line by itself in an example means you must type a blank line; this is used to
end a multi-line command.</p>
<p>You can toggle the display of prompts and output by clicking on <code class="docutils literal notranslate"><span class="pre">&gt;&gt;&gt;</span></code>
in the upper-right corner of an example box.  If you hide the prompts
and output for an example, then you can easily copy and paste the input
lines into your interpreter.</p>
<p id="index-0">Many of the examples in this manual, even those entered at the interactive
prompt, include comments.  Comments in Python start with the hash character,
<code class="docutils literal notranslate"><span class="pre">#</span></code>, and extend to the end of the physical line.  A comment may appear at the
start of a line or following whitespace or code, but not within a string
literal.  A hash character within a string literal is just a hash character.
Since comments are to clarify code and are not interpreted by Python, they may
be omitted when typing in examples.</p>
<p>Some examples:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="c1"># this is the first comment</span>
<span class="n">spam</span> <span class="o">=</span> <span class="mi">1</span>  <span class="c1"># and this is the second comment</span>
        <span class="c1"># ... and now a third!</span>
<span class="n">text</span> <span class="o">=</span> <span class="s2">&quot;# This is not a comment because it&#39;s inside quotes.&quot;</span>
</pre></div>
</div>
<section id="using-python-as-a-calculator">
<span id="tut-calculator"></span><h2><span class="section-number">3.1. </span>Using Python as a Calculator<a class="headerlink" href="#using-python-as-a-calculator" title="Permalink to this headline">¶</a></h2>
<p>Let’s try some simple Python commands.  Start the interpreter and wait for the
primary prompt, <code class="docutils literal notranslate"><span class="pre">&gt;&gt;&gt;</span></code>.  (It shouldn’t take long.)</p>
<section id="numbers">
<span id="tut-numbers"></span><h3><span class="section-number">3.1.1. </span>Numbers<a class="headerlink" href="#numbers" title="Permalink to this headline">¶</a></h3>
<p>The interpreter acts as a simple calculator: you can type an expression at it
and it will write the value.  Expression syntax is straightforward: the
operators <code class="docutils literal notranslate"><span class="pre">+</span></code>, <code class="docutils literal notranslate"><span class="pre">-</span></code>, <code class="docutils literal notranslate"><span class="pre">*</span></code> and <code class="docutils literal notranslate"><span class="pre">/</span></code> work just like in most other languages
(for example, Pascal or C); parentheses (<code class="docutils literal notranslate"><span class="pre">()</span></code>) can be used for grouping.
For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="mi">2</span> <span class="o">+</span> <span class="mi">2</span>
<span class="go">4</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">50</span> <span class="o">-</span> <span class="mi">5</span><span class="o">*</span><span class="mi">6</span>
<span class="go">20</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">(</span><span class="mi">50</span> <span class="o">-</span> <span class="mi">5</span><span class="o">*</span><span class="mi">6</span><span class="p">)</span> <span class="o">/</span> <span class="mi">4</span>
<span class="go">5.0</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">8</span> <span class="o">/</span> <span class="mi">5</span>  <span class="c1"># division always returns a floating point number</span>
<span class="go">1.6</span>
</pre></div>
</div>
<p>The integer numbers (e.g. <code class="docutils literal notranslate"><span class="pre">2</span></code>, <code class="docutils literal notranslate"><span class="pre">4</span></code>, <code class="docutils literal notranslate"><span class="pre">20</span></code>) have type <a class="reference internal" href="../library/functions.html#int" title="int"><code class="xref py py-class docutils literal notranslate"><span class="pre">int</span></code></a>,
the ones with a fractional part (e.g. <code class="docutils literal notranslate"><span class="pre">5.0</span></code>, <code class="docutils literal notranslate"><span class="pre">1.6</span></code>) have type
<a class="reference internal" href="../library/functions.html#float" title="float"><code class="xref py py-class docutils literal notranslate"><span class="pre">float</span></code></a>.  We will see more about numeric types later in the tutorial.</p>
<p>Division (<code class="docutils literal notranslate"><span class="pre">/</span></code>) always returns a float.  To do <a class="reference internal" href="../glossary.html#term-floor-division"><span class="xref std std-term">floor division</span></a> and
get an integer result you can use the <code class="docutils literal notranslate"><span class="pre">//</span></code> operator; to calculate
the remainder you can use <code class="docutils literal notranslate"><span class="pre">%</span></code>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="mi">17</span> <span class="o">/</span> <span class="mi">3</span>  <span class="c1"># classic division returns a float</span>
<span class="go">5.666666666666667</span>
<span class="go">&gt;&gt;&gt;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">17</span> <span class="o">//</span> <span class="mi">3</span>  <span class="c1"># floor division discards the fractional part</span>
<span class="go">5</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">17</span> <span class="o">%</span> <span class="mi">3</span>  <span class="c1"># the % operator returns the remainder of the division</span>
<span class="go">2</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">5</span> <span class="o">*</span> <span class="mi">3</span> <span class="o">+</span> <span class="mi">2</span>  <span class="c1"># floored quotient * divisor + remainder</span>
<span class="go">17</span>
</pre></div>
</div>
<p>With Python, it is possible to use the <code class="docutils literal notranslate"><span class="pre">**</span></code> operator to calculate powers <a class="footnote-reference brackets" href="#id3" id="id1">1</a>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="mi">5</span> <span class="o">**</span> <span class="mi">2</span>  <span class="c1"># 5 squared</span>
<span class="go">25</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">2</span> <span class="o">**</span> <span class="mi">7</span>  <span class="c1"># 2 to the power of 7</span>
<span class="go">128</span>
</pre></div>
</div>
<p>The equal sign (<code class="docutils literal notranslate"><span class="pre">=</span></code>) is used to assign a value to a variable. Afterwards, no
result is displayed before the next interactive prompt:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">width</span> <span class="o">=</span> <span class="mi">20</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">height</span> <span class="o">=</span> <span class="mi">5</span> <span class="o">*</span> <span class="mi">9</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">width</span> <span class="o">*</span> <span class="n">height</span>
<span class="go">900</span>
</pre></div>
</div>
<p>If a variable is not “defined” (assigned a value), trying to use it will
give you an error:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">n</span>  <span class="c1"># try to access an undefined variable</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">NameError</span>: <span class="n">name &#39;n&#39; is not defined</span>
</pre></div>
</div>
<p>There is full support for floating point; operators with mixed type operands
convert the integer operand to floating point:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="mi">4</span> <span class="o">*</span> <span class="mf">3.75</span> <span class="o">-</span> <span class="mi">1</span>
<span class="go">14.0</span>
</pre></div>
</div>
<p>In interactive mode, the last printed expression is assigned to the variable
<code class="docutils literal notranslate"><span class="pre">_</span></code>.  This means that when you are using Python as a desk calculator, it is
somewhat easier to continue calculations, for example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">tax</span> <span class="o">=</span> <span class="mf">12.5</span> <span class="o">/</span> <span class="mi">100</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">price</span> <span class="o">=</span> <span class="mf">100.50</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">price</span> <span class="o">*</span> <span class="n">tax</span>
<span class="go">12.5625</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">price</span> <span class="o">+</span> <span class="n">_</span>
<span class="go">113.0625</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">round</span><span class="p">(</span><span class="n">_</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
<span class="go">113.06</span>
</pre></div>
</div>
<p>This variable should be treated as read-only by the user.  Don’t explicitly
assign a value to it — you would create an independent local variable with the
same name masking the built-in variable with its magic behavior.</p>
<p>In addition to <a class="reference internal" href="../library/functions.html#int" title="int"><code class="xref py py-class docutils literal notranslate"><span class="pre">int</span></code></a> and <a class="reference internal" href="../library/functions.html#float" title="float"><code class="xref py py-class docutils literal notranslate"><span class="pre">float</span></code></a>, Python supports other types of
numbers, such as <a class="reference internal" href="../library/decimal.html#decimal.Decimal" title="decimal.Decimal"><code class="xref py py-class docutils literal notranslate"><span class="pre">Decimal</span></code></a> and <a class="reference internal" href="../library/fractions.html#fractions.Fraction" title="fractions.Fraction"><code class="xref py py-class docutils literal notranslate"><span class="pre">Fraction</span></code></a>.
Python also has built-in support for <a class="reference internal" href="../library/stdtypes.html#typesnumeric"><span class="std std-ref">complex numbers</span></a>,
and uses the <code class="docutils literal notranslate"><span class="pre">j</span></code> or <code class="docutils literal notranslate"><span class="pre">J</span></code> suffix to indicate the imaginary part
(e.g. <code class="docutils literal notranslate"><span class="pre">3+5j</span></code>).</p>
</section>
<section id="strings">
<span id="tut-strings"></span><h3><span class="section-number">3.1.2. </span>Strings<a class="headerlink" href="#strings" title="Permalink to this headline">¶</a></h3>
<p>Besides numbers, Python can also manipulate strings, which can be expressed
in several ways.  They can be enclosed in single quotes (<code class="docutils literal notranslate"><span class="pre">'...'</span></code>) or
double quotes (<code class="docutils literal notranslate"><span class="pre">&quot;...&quot;</span></code>) with the same result <a class="footnote-reference brackets" href="#id4" id="id2">2</a>.  <code class="docutils literal notranslate"><span class="pre">\</span></code> can be used
to escape quotes:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;spam eggs&#39;</span>  <span class="c1"># single quotes</span>
<span class="go">&#39;spam eggs&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;doesn</span><span class="se">\&#39;</span><span class="s1">t&#39;</span>  <span class="c1"># use \&#39; to escape the single quote...</span>
<span class="go">&quot;doesn&#39;t&quot;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s2">&quot;doesn&#39;t&quot;</span>  <span class="c1"># ...or use double quotes instead</span>
<span class="go">&quot;doesn&#39;t&quot;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;&quot;Yes,&quot; they said.&#39;</span>
<span class="go">&#39;&quot;Yes,&quot; they said.&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s2">&quot;</span><span class="se">\&quot;</span><span class="s2">Yes,</span><span class="se">\&quot;</span><span class="s2"> they said.&quot;</span>
<span class="go">&#39;&quot;Yes,&quot; they said.&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;&quot;Isn</span><span class="se">\&#39;</span><span class="s1">t,&quot; they said.&#39;</span>
<span class="go">&#39;&quot;Isn\&#39;t,&quot; they said.&#39;</span>
</pre></div>
</div>
<p>In the interactive interpreter, the output string is enclosed in quotes and
special characters are escaped with backslashes.  While this might sometimes
look different from the input (the enclosing quotes could change), the two
strings are equivalent.  The string is enclosed in double quotes if
the string contains a single quote and no double quotes, otherwise it is
enclosed in single quotes.  The <a class="reference internal" href="../library/functions.html#print" title="print"><code class="xref py py-func docutils literal notranslate"><span class="pre">print()</span></code></a> function produces a more
readable output, by omitting the enclosing quotes and by printing escaped
and special characters:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;&quot;Isn</span><span class="se">\&#39;</span><span class="s1">t,&quot; they said.&#39;</span>
<span class="go">&#39;&quot;Isn\&#39;t,&quot; they said.&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="s1">&#39;&quot;Isn</span><span class="se">\&#39;</span><span class="s1">t,&quot; they said.&#39;</span><span class="p">)</span>
<span class="go">&quot;Isn&#39;t,&quot; they said.</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">s</span> <span class="o">=</span> <span class="s1">&#39;First line.</span><span class="se">\n</span><span class="s1">Second line.&#39;</span>  <span class="c1"># \n means newline</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">s</span>  <span class="c1"># without print(), \n is included in the output</span>
<span class="go">&#39;First line.\nSecond line.&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>  <span class="c1"># with print(), \n produces a new line</span>
<span class="go">First line.</span>
<span class="go">Second line.</span>
</pre></div>
</div>
<p>If you don’t want characters prefaced by <code class="docutils literal notranslate"><span class="pre">\</span></code> to be interpreted as
special characters, you can use <em>raw strings</em> by adding an <code class="docutils literal notranslate"><span class="pre">r</span></code> before
the first quote:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="s1">&#39;C:\some</span><span class="se">\n</span><span class="s1">ame&#39;</span><span class="p">)</span>  <span class="c1"># here \n means newline!</span>
<span class="go">C:\some</span>
<span class="go">ame</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="sa">r</span><span class="s1">&#39;C:\some\name&#39;</span><span class="p">)</span>  <span class="c1"># note the r before the quote</span>
<span class="go">C:\some\name</span>
</pre></div>
</div>
<p>There is one subtle aspect to raw strings: a raw string may not end in
an odd number of <code class="docutils literal notranslate"><span class="pre">\</span></code> characters; see
<a class="reference internal" href="../faq/programming.html#faq-programming-raw-string-backslash"><span class="std std-ref">the FAQ entry</span></a> for more information
and workarounds.</p>
<p>String literals can span multiple lines.  One way is using triple-quotes:
<code class="docutils literal notranslate"><span class="pre">&quot;&quot;&quot;...&quot;&quot;&quot;</span></code> or <code class="docutils literal notranslate"><span class="pre">'''...'''</span></code>.  End of lines are automatically
included in the string, but it’s possible to prevent this by adding a <code class="docutils literal notranslate"><span class="pre">\</span></code> at
the end of the line.  The following example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;&quot;&quot;</span><span class="se">\</span>
<span class="s2">Usage: thingy [OPTIONS]</span>
<span class="s2">     -h                        Display this usage message</span>
<span class="s2">     -H hostname               Hostname to connect to</span>
<span class="s2">&quot;&quot;&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>produces the following output (note that the initial newline is not included):</p>
<div class="highlight-text notranslate"><div class="highlight"><pre><span></span>Usage: thingy [OPTIONS]
   -h                        Display this usage message
   -H hostname               Hostname to connect to
</pre></div>
</div>
<p>Strings can be concatenated (glued together) with the <code class="docutils literal notranslate"><span class="pre">+</span></code> operator, and
repeated with <code class="docutils literal notranslate"><span class="pre">*</span></code>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="c1"># 3 times &#39;un&#39;, followed by &#39;ium&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">3</span> <span class="o">*</span> <span class="s1">&#39;un&#39;</span> <span class="o">+</span> <span class="s1">&#39;ium&#39;</span>
<span class="go">&#39;unununium&#39;</span>
</pre></div>
</div>
<p>Two or more <em>string literals</em> (i.e. the ones enclosed between quotes) next
to each other are automatically concatenated.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;Py&#39;</span> <span class="s1">&#39;thon&#39;</span>
<span class="go">&#39;Python&#39;</span>
</pre></div>
</div>
<p>This feature is particularly useful when you want to break long strings:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">text</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;Put several strings within parentheses &#39;</span>
<span class="gp">... </span>        <span class="s1">&#39;to have them joined together.&#39;</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">text</span>
<span class="go">&#39;Put several strings within parentheses to have them joined together.&#39;</span>
</pre></div>
</div>
<p>This only works with two literals though, not with variables or expressions:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">prefix</span> <span class="o">=</span> <span class="s1">&#39;Py&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">prefix</span> <span class="s1">&#39;thon&#39;</span>  <span class="c1"># can&#39;t concatenate a variable and a string literal</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>
  <span class="n">prefix</span> <span class="s1">&#39;thon&#39;</span>
         <span class="pm">^^^^^^</span>
<span class="gr">SyntaxError</span>: <span class="n">invalid syntax</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">(</span><span class="s1">&#39;un&#39;</span> <span class="o">*</span> <span class="mi">3</span><span class="p">)</span> <span class="s1">&#39;ium&#39;</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>
  <span class="p">(</span><span class="s1">&#39;un&#39;</span> <span class="o">*</span> <span class="mi">3</span><span class="p">)</span> <span class="s1">&#39;ium&#39;</span>
             <span class="pm">^^^^^</span>
<span class="gr">SyntaxError</span>: <span class="n">invalid syntax</span>
</pre></div>
</div>
<p>If you want to concatenate variables or a variable and a literal, use <code class="docutils literal notranslate"><span class="pre">+</span></code>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">prefix</span> <span class="o">+</span> <span class="s1">&#39;thon&#39;</span>
<span class="go">&#39;Python&#39;</span>
</pre></div>
</div>
<p>Strings can be <em>indexed</em> (subscripted), with the first character having index 0.
There is no separate character type; a character is simply a string of size
one:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span> <span class="o">=</span> <span class="s1">&#39;Python&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>  <span class="c1"># character in position 0</span>
<span class="go">&#39;P&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span>  <span class="c1"># character in position 5</span>
<span class="go">&#39;n&#39;</span>
</pre></div>
</div>
<p>Indices may also be negative numbers, to start counting from the right:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>  <span class="c1"># last character</span>
<span class="go">&#39;n&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="o">-</span><span class="mi">2</span><span class="p">]</span>  <span class="c1"># second-last character</span>
<span class="go">&#39;o&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="o">-</span><span class="mi">6</span><span class="p">]</span>
<span class="go">&#39;P&#39;</span>
</pre></div>
</div>
<p>Note that since -0 is the same as 0, negative indices start from -1.</p>
<p>In addition to indexing, <em>slicing</em> is also supported.  While indexing is used
to obtain individual characters, <em>slicing</em> allows you to obtain substring:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">0</span><span class="p">:</span><span class="mi">2</span><span class="p">]</span>  <span class="c1"># characters from position 0 (included) to 2 (excluded)</span>
<span class="go">&#39;Py&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">2</span><span class="p">:</span><span class="mi">5</span><span class="p">]</span>  <span class="c1"># characters from position 2 (included) to 5 (excluded)</span>
<span class="go">&#39;tho&#39;</span>
</pre></div>
</div>
<p>Slice indices have useful defaults; an omitted first index defaults to zero, an
omitted second index defaults to the size of the string being sliced.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[:</span><span class="mi">2</span><span class="p">]</span>   <span class="c1"># character from the beginning to position 2 (excluded)</span>
<span class="go">&#39;Py&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">4</span><span class="p">:]</span>   <span class="c1"># characters from position 4 (included) to the end</span>
<span class="go">&#39;on&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="o">-</span><span class="mi">2</span><span class="p">:]</span>  <span class="c1"># characters from the second-last (included) to the end</span>
<span class="go">&#39;on&#39;</span>
</pre></div>
</div>
<p>Note how the start is always included, and the end always excluded.  This
makes sure that <code class="docutils literal notranslate"><span class="pre">s[:i]</span> <span class="pre">+</span> <span class="pre">s[i:]</span></code> is always equal to <code class="docutils literal notranslate"><span class="pre">s</span></code>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[:</span><span class="mi">2</span><span class="p">]</span> <span class="o">+</span> <span class="n">word</span><span class="p">[</span><span class="mi">2</span><span class="p">:]</span>
<span class="go">&#39;Python&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[:</span><span class="mi">4</span><span class="p">]</span> <span class="o">+</span> <span class="n">word</span><span class="p">[</span><span class="mi">4</span><span class="p">:]</span>
<span class="go">&#39;Python&#39;</span>
</pre></div>
</div>
<p>One way to remember how slices work is to think of the indices as pointing
<em>between</em> characters, with the left edge of the first character numbered 0.
Then the right edge of the last character of a string of <em>n</em> characters has
index <em>n</em>, for example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span> <span class="o">+---+---+---+---+---+---+</span>
<span class="o">|</span> <span class="n">P</span> <span class="o">|</span> <span class="n">y</span> <span class="o">|</span> <span class="n">t</span> <span class="o">|</span> <span class="n">h</span> <span class="o">|</span> <span class="n">o</span> <span class="o">|</span> <span class="n">n</span> <span class="o">|</span>
<span class="o">+---+---+---+---+---+---+</span>
<span class="mi">0</span>   <span class="mi">1</span>   <span class="mi">2</span>   <span class="mi">3</span>   <span class="mi">4</span>   <span class="mi">5</span>   <span class="mi">6</span>
<span class="o">-</span><span class="mi">6</span>  <span class="o">-</span><span class="mi">5</span>  <span class="o">-</span><span class="mi">4</span>  <span class="o">-</span><span class="mi">3</span>  <span class="o">-</span><span class="mi">2</span>  <span class="o">-</span><span class="mi">1</span>
</pre></div>
</div>
<p>The first row of numbers gives the position of the indices 0…6 in the string;
the second row gives the corresponding negative indices. The slice from <em>i</em> to
<em>j</em> consists of all characters between the edges labeled <em>i</em> and <em>j</em>,
respectively.</p>
<p>For non-negative indices, the length of a slice is the difference of the
indices, if both are within bounds.  For example, the length of <code class="docutils literal notranslate"><span class="pre">word[1:3]</span></code> is
2.</p>
<p>Attempting to use an index that is too large will result in an error:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">42</span><span class="p">]</span>  <span class="c1"># the word only has 6 characters</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">IndexError</span>: <span class="n">string index out of range</span>
</pre></div>
</div>
<p>However, out of range slice indexes are handled gracefully when used for
slicing:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">4</span><span class="p">:</span><span class="mi">42</span><span class="p">]</span>
<span class="go">&#39;on&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">42</span><span class="p">:]</span>
<span class="go">&#39;&#39;</span>
</pre></div>
</div>
<p>Python strings cannot be changed — they are <a class="reference internal" href="../glossary.html#term-immutable"><span class="xref std std-term">immutable</span></a>.
Therefore, assigning to an indexed position in the string results in an error:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;J&#39;</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">&#39;str&#39; object does not support item assignment</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[</span><span class="mi">2</span><span class="p">:]</span> <span class="o">=</span> <span class="s1">&#39;py&#39;</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">&#39;str&#39; object does not support item assignment</span>
</pre></div>
</div>
<p>If you need a different string, you should create a new one:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;J&#39;</span> <span class="o">+</span> <span class="n">word</span><span class="p">[</span><span class="mi">1</span><span class="p">:]</span>
<span class="go">&#39;Jython&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">word</span><span class="p">[:</span><span class="mi">2</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;py&#39;</span>
<span class="go">&#39;Pypy&#39;</span>
</pre></div>
</div>
<p>The built-in function <a class="reference internal" href="../library/functions.html#len" title="len"><code class="xref py py-func docutils literal notranslate"><span class="pre">len()</span></code></a> returns the length of a string:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">s</span> <span class="o">=</span> <span class="s1">&#39;supercalifragilisticexpialidocious&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">len</span><span class="p">(</span><span class="n">s</span><span class="p">)</span>
<span class="go">34</span>
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<dl class="simple">
<dt><a class="reference internal" href="../library/stdtypes.html#textseq"><span class="std std-ref">Text Sequence Type — str</span></a></dt><dd><p>Strings are examples of <em>sequence types</em>, and support the common
operations supported by such types.</p>
</dd>
<dt><a class="reference internal" href="../library/stdtypes.html#string-methods"><span class="std std-ref">String Methods</span></a></dt><dd><p>Strings support a large number of methods for
basic transformations and searching.</p>
</dd>
<dt><a class="reference internal" href="../reference/lexical_analysis.html#f-strings"><span class="std std-ref">Formatted string literals</span></a></dt><dd><p>String literals that have embedded expressions.</p>
</dd>
<dt><a class="reference internal" href="../library/string.html#formatstrings"><span class="std std-ref">Format String Syntax</span></a></dt><dd><p>Information about string formatting with <a class="reference internal" href="../library/stdtypes.html#str.format" title="str.format"><code class="xref py py-meth docutils literal notranslate"><span class="pre">str.format()</span></code></a>.</p>
</dd>
<dt><a class="reference internal" href="../library/stdtypes.html#old-string-formatting"><span class="std std-ref">printf-style String Formatting</span></a></dt><dd><p>The old formatting operations invoked when strings are
the left operand of the <code class="docutils literal notranslate"><span class="pre">%</span></code> operator are described in more detail here.</p>
</dd>
</dl>
</div>
</section>
<section id="lists">
<span id="tut-lists"></span><h3><span class="section-number">3.1.3. </span>Lists<a class="headerlink" href="#lists" title="Permalink to this headline">¶</a></h3>
<p>Python knows a number of <em>compound</em> data types, used to group together other
values.  The most versatile is the <em>list</em>, which can be written as a list of
comma-separated values (items) between square brackets.  Lists might contain
items of different types, but usually the items all have the same type.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">9</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="mi">25</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span>
<span class="go">[1, 4, 9, 16, 25]</span>
</pre></div>
</div>
<p>Like strings (and all other built-in <a class="reference internal" href="../glossary.html#term-sequence"><span class="xref std std-term">sequence</span></a> types), lists can be
indexed and sliced:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>  <span class="c1"># indexing returns the item</span>
<span class="go">1</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span>
<span class="go">25</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span><span class="p">[</span><span class="o">-</span><span class="mi">3</span><span class="p">:]</span>  <span class="c1"># slicing returns a new list</span>
<span class="go">[9, 16, 25]</span>
</pre></div>
</div>
<p>All slice operations return a new list containing the requested elements.  This
means that the following slice returns a
<a class="reference internal" href="../library/copy.html#shallow-vs-deep-copy"><span class="std std-ref">shallow copy</span></a> of the list:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span><span class="p">[:]</span>
<span class="go">[1, 4, 9, 16, 25]</span>
</pre></div>
</div>
<p>Lists also support operations like concatenation:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span> <span class="o">+</span> <span class="p">[</span><span class="mi">36</span><span class="p">,</span> <span class="mi">49</span><span class="p">,</span> <span class="mi">64</span><span class="p">,</span> <span class="mi">81</span><span class="p">,</span> <span class="mi">100</span><span class="p">]</span>
<span class="go">[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]</span>
</pre></div>
</div>
<p>Unlike strings, which are <a class="reference internal" href="../glossary.html#term-immutable"><span class="xref std std-term">immutable</span></a>, lists are a <a class="reference internal" href="../glossary.html#term-mutable"><span class="xref std std-term">mutable</span></a>
type, i.e. it is possible to change their content:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="mi">27</span><span class="p">,</span> <span class="mi">65</span><span class="p">,</span> <span class="mi">125</span><span class="p">]</span>  <span class="c1"># something&#39;s wrong here</span>
<span class="gp">&gt;&gt;&gt; </span><span class="mi">4</span> <span class="o">**</span> <span class="mi">3</span>  <span class="c1"># the cube of 4 is 64, not 65!</span>
<span class="go">64</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">=</span> <span class="mi">64</span>  <span class="c1"># replace the wrong value</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span>
<span class="go">[1, 8, 27, 64, 125]</span>
</pre></div>
</div>
<p>You can also add new items at the end of the list, by using
the <code class="xref py py-meth docutils literal notranslate"><span class="pre">append()</span></code> <em>method</em> (we will see more about methods later):</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="mi">216</span><span class="p">)</span>  <span class="c1"># add the cube of 6</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="mi">7</span> <span class="o">**</span> <span class="mi">3</span><span class="p">)</span>  <span class="c1"># and the cube of 7</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">cubes</span>
<span class="go">[1, 8, 27, 64, 125, 216, 343]</span>
</pre></div>
</div>
<p>Assignment to slices is also possible, and this can even change the size of the
list or clear it entirely:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;b&#39;</span><span class="p">,</span> <span class="s1">&#39;c&#39;</span><span class="p">,</span> <span class="s1">&#39;d&#39;</span><span class="p">,</span> <span class="s1">&#39;e&#39;</span><span class="p">,</span> <span class="s1">&#39;f&#39;</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span>
<span class="go">[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;, &#39;g&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># replace some values</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span><span class="p">[</span><span class="mi">2</span><span class="p">:</span><span class="mi">5</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;C&#39;</span><span class="p">,</span> <span class="s1">&#39;D&#39;</span><span class="p">,</span> <span class="s1">&#39;E&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span>
<span class="go">[&#39;a&#39;, &#39;b&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;f&#39;, &#39;g&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># now remove them</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span><span class="p">[</span><span class="mi">2</span><span class="p">:</span><span class="mi">5</span><span class="p">]</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span>
<span class="go">[&#39;a&#39;, &#39;b&#39;, &#39;f&#39;, &#39;g&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># clear the list by replacing all the elements with an empty list</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span><span class="p">[:]</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span>
<span class="go">[]</span>
</pre></div>
</div>
<p>The built-in function <a class="reference internal" href="../library/functions.html#len" title="len"><code class="xref py py-func docutils literal notranslate"><span class="pre">len()</span></code></a> also applies to lists:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">letters</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;b&#39;</span><span class="p">,</span> <span class="s1">&#39;c&#39;</span><span class="p">,</span> <span class="s1">&#39;d&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">len</span><span class="p">(</span><span class="n">letters</span><span class="p">)</span>
<span class="go">4</span>
</pre></div>
</div>
<p>It is possible to nest lists (create lists containing other lists), for
example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;b&#39;</span><span class="p">,</span> <span class="s1">&#39;c&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">n</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">x</span> <span class="o">=</span> <span class="p">[</span><span class="n">a</span><span class="p">,</span> <span class="n">n</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">x</span>
<span class="go">[[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [1, 2, 3]]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">x</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="go">[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">x</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span>
<span class="go">&#39;b&#39;</span>
</pre></div>
</div>
</section>
</section>
<section id="first-steps-towards-programming">
<span id="tut-firststeps"></span><h2><span class="section-number">3.2. </span>First Steps Towards Programming<a class="headerlink" href="#first-steps-towards-programming" title="Permalink to this headline">¶</a></h2>
<p>Of course, we can use Python for more complicated tasks than adding two and two
together.  For instance, we can write an initial sub-sequence of the
<a class="reference external" href="https://en.wikipedia.org/wiki/Fibonacci_number">Fibonacci series</a>
as follows:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="c1"># Fibonacci series:</span>
<span class="gp">... </span><span class="c1"># the sum of two elements defines the next</span>
<span class="gp">... </span><span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">while</span> <span class="n">a</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
<span class="gp">... </span>    <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="o">+</span><span class="n">b</span>
<span class="gp">...</span>
<span class="go">0</span>
<span class="go">1</span>
<span class="go">1</span>
<span class="go">2</span>
<span class="go">3</span>
<span class="go">5</span>
<span class="go">8</span>
</pre></div>
</div>
<p>This example introduces several new features.</p>
<ul>
<li><p>The first line contains a <em>multiple assignment</em>: the variables <code class="docutils literal notranslate"><span class="pre">a</span></code> and <code class="docutils literal notranslate"><span class="pre">b</span></code>
simultaneously get the new values 0 and 1.  On the last line this is used again,
demonstrating that the expressions on the right-hand side are all evaluated
first before any of the assignments take place.  The right-hand side expressions
are evaluated  from the left to the right.</p></li>
<li><p>The <a class="reference internal" href="../reference/compound_stmts.html#while"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">while</span></code></a> loop executes as long as the condition (here: <code class="docutils literal notranslate"><span class="pre">a</span> <span class="pre">&lt;</span> <span class="pre">10</span></code>)
remains true.  In Python, like in C, any non-zero integer value is true; zero is
false.  The condition may also be a string or list value, in fact any sequence;
anything with a non-zero length is true, empty sequences are false.  The test
used in the example is a simple comparison.  The standard comparison operators
are written the same as in C: <code class="docutils literal notranslate"><span class="pre">&lt;</span></code> (less than), <code class="docutils literal notranslate"><span class="pre">&gt;</span></code> (greater than), <code class="docutils literal notranslate"><span class="pre">==</span></code>
(equal to), <code class="docutils literal notranslate"><span class="pre">&lt;=</span></code> (less than or equal to), <code class="docutils literal notranslate"><span class="pre">&gt;=</span></code> (greater than or equal to)
and <code class="docutils literal notranslate"><span class="pre">!=</span></code> (not equal to).</p></li>
<li><p>The <em>body</em> of the loop is <em>indented</em>: indentation is Python’s way of grouping
statements.  At the interactive prompt, you have to type a tab or space(s) for
each indented line.  In practice you will prepare more complicated input
for Python with a text editor; all decent text editors have an auto-indent
facility.  When a compound statement is entered interactively, it must be
followed by a blank line to indicate completion (since the parser cannot
guess when you have typed the last line).  Note that each line within a basic
block must be indented by the same amount.</p></li>
<li><p>The <a class="reference internal" href="../library/functions.html#print" title="print"><code class="xref py py-func docutils literal notranslate"><span class="pre">print()</span></code></a> function writes the value of the argument(s) it is given.
It differs from just writing the expression you want to write (as we did
earlier in the calculator examples) in the way it handles multiple arguments,
floating point quantities, and strings.  Strings are printed without quotes,
and a space is inserted between items, so you can format things nicely, like
this:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">i</span> <span class="o">=</span> <span class="mi">256</span><span class="o">*</span><span class="mi">256</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="s1">&#39;The value of i is&#39;</span><span class="p">,</span> <span class="n">i</span><span class="p">)</span>
<span class="go">The value of i is 65536</span>
</pre></div>
</div>
<p>The keyword argument <em>end</em> can be used to avoid the newline after the output,
or end the output with a different string:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">while</span> <span class="n">a</span> <span class="o">&lt;</span> <span class="mi">1000</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s1">&#39;,&#39;</span><span class="p">)</span>
<span class="gp">... </span>    <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="o">+</span><span class="n">b</span>
<span class="gp">...</span>
<span class="go">0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,</span>
</pre></div>
</div>
</li>
</ul>
<p class="rubric">Footnotes</p>
<dl class="footnote brackets">
<dt class="label" id="id3"><span class="brackets"><a class="fn-backref" href="#id1">1</a></span></dt>
<dd><p>Since <code class="docutils literal notranslate"><span class="pre">**</span></code> has higher precedence than <code class="docutils literal notranslate"><span class="pre">-</span></code>, <code class="docutils literal notranslate"><span class="pre">-3**2</span></code> will be
interpreted as <code class="docutils literal notranslate"><span class="pre">-(3**2)</span></code> and thus result in <code class="docutils literal notranslate"><span class="pre">-9</span></code>.  To avoid this
and get <code class="docutils literal notranslate"><span class="pre">9</span></code>, you can use <code class="docutils literal notranslate"><span class="pre">(-3)**2</span></code>.</p>
</dd>
<dt class="label" id="id4"><span class="brackets"><a class="fn-backref" href="#id2">2</a></span></dt>
<dd><p>Unlike other languages, special characters such as <code class="docutils literal notranslate"><span class="pre">\n</span></code> have the
same meaning with both single (<code class="docutils literal notranslate"><span class="pre">'...'</span></code>) and double (<code class="docutils literal notranslate"><span class="pre">&quot;...&quot;</span></code>) quotes.
The only difference between the two is that within single quotes you don’t
need to escape <code class="docutils literal notranslate"><span class="pre">&quot;</span></code> (but you have to escape <code class="docutils literal notranslate"><span class="pre">\'</span></code>) and vice versa.</p>
</dd>
</dl>
</section>
</section>


          <div class="clearer"></div>
        </div>
      </div>
    </div>
    <div class="sphinxsidebar" role="navigation" aria-label="main navigation">
      <div class="sphinxsidebarwrapper">
<div>
  <h3><a href="../contents.html">Table of Contents</a></h3>
  <ul>
<li><a class="reference internal" href="#">3. An Informal Introduction to Python</a><ul>
<li><a class="reference internal" href="#using-python-as-a-calculator">3.1. Using Python as a Calculator</a><ul>
<li><a class="reference internal" href="#numbers">3.1.1. Numbers</a></li>
<li><a class="reference internal" href="#strings">3.1.2. Strings</a></li>
<li><a class="reference internal" href="#lists">3.1.3. Lists</a></li>
</ul>
</li>
<li><a class="reference internal" href="#first-steps-towards-programming">3.2. First Steps Towards Programming</a></li>
</ul>
</li>
</ul>

</div>
<div>
  <h4>Previous topic</h4>
  <p class="topless"><a href="interpreter.html"
                        title="previous chapter"><span class="section-number">2. </span>Using the Python Interpreter</a></p>
</div>
<div>
  <h4>Next topic</h4>
  <p class="topless"><a href="controlflow.html"
                        title="next chapter"><span class="section-number">4. </span>More Control Flow Tools</a></p>
</div>
<div role="note" aria-label="source link">
  <h3>This Page</h3>
  <ul class="this-page-menu">
    <li><a href="../bugs.html">Report a Bug</a></li>
    <li>
      <a href="https://github.com/python/cpython/blob/3.11/Doc/tutorial/introduction.rst"
          rel="nofollow">Show Source
      </a>
    </li>
  </ul>
</div>
      </div>
    </div>
    <div class="clearer"></div>
  </div>  
  )
}

export default InformalIntroduction
