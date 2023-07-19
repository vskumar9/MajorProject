import React from 'react'

const ControlTools = () => {
  return (
    <div class="document">
    <div class="documentwrapper">
      <div class="bodywrapper">
        <div class="body" role="main">
          
<section id="more-control-flow-tools">
<span id="tut-morecontrol"></span><h1><span class="section-number">4. </span>More Control Flow Tools<a class="headerlink" href="#more-control-flow-tools" title="Permalink to this headline">¶</a></h1>
<p>Besides the <a class="reference internal" href="../reference/compound_stmts.html#while"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">while</span></code></a> statement just introduced, Python uses the usual
flow control statements known from other languages, with some twists.</p>
<section id="if-statements">
<span id="tut-if"></span><h2><span class="section-number">4.1. </span><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code> Statements<a class="headerlink" href="#if-statements" title="Permalink to this headline">¶</a></h2>
<p>Perhaps the most well-known statement type is the <a class="reference internal" href="../reference/compound_stmts.html#if"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code></a> statement.  For
example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">x</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">&quot;Please enter an integer: &quot;</span><span class="p">))</span>
<span class="go">Please enter an integer: 42</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">if</span> <span class="n">x</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span>
<span class="gp">... </span>    <span class="n">x</span> <span class="o">=</span> <span class="mi">0</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Negative changed to zero&#39;</span><span class="p">)</span>
<span class="gp">... </span><span class="k">elif</span> <span class="n">x</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Zero&#39;</span><span class="p">)</span>
<span class="gp">... </span><span class="k">elif</span> <span class="n">x</span> <span class="o">==</span> <span class="mi">1</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Single&#39;</span><span class="p">)</span>
<span class="gp">... </span><span class="k">else</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;More&#39;</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">More</span>
</pre></div>
</div>
<p>There can be zero or more <a class="reference internal" href="../reference/compound_stmts.html#elif"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">elif</span></code></a> parts, and the <a class="reference internal" href="../reference/compound_stmts.html#else"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">else</span></code></a> part is
optional.  The keyword ‘<code class="xref std std-keyword docutils literal notranslate"><span class="pre">elif</span></code>’ is short for ‘else if’, and is useful
to avoid excessive indentation.  An  <code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code> … <code class="xref std std-keyword docutils literal notranslate"><span class="pre">elif</span></code> …
<code class="xref std std-keyword docutils literal notranslate"><span class="pre">elif</span></code> … sequence is a substitute for the <code class="docutils literal notranslate"><span class="pre">switch</span></code> or
<code class="docutils literal notranslate"><span class="pre">case</span></code> statements found in other languages.</p>
<p>If you’re comparing the same value to several constants, or checking for specific types or
attributes, you may also find the <code class="xref std std-keyword docutils literal notranslate"><span class="pre">match</span></code> statement useful. For more
details see <a class="reference internal" href="#tut-match"><span class="std std-ref">match Statements</span></a>.</p>
</section>
<section id="for-statements">
<span id="tut-for"></span><h2><span class="section-number">4.2. </span><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> Statements<a class="headerlink" href="#for-statements" title="Permalink to this headline">¶</a></h2>
<p id="index-0">The <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> statement in Python differs a bit from what you may be used
to in C or Pascal.  Rather than always iterating over an arithmetic progression
of numbers (like in Pascal), or giving the user the ability to define both the
iteration step and halting condition (as C), Python’s <code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> statement
iterates over the items of any sequence (a list or a string), in the order that
they appear in the sequence.  For example (no pun intended):</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="c1"># Measure some strings:</span>
<span class="gp">... </span><span class="n">words</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;cat&#39;</span><span class="p">,</span> <span class="s1">&#39;window&#39;</span><span class="p">,</span> <span class="s1">&#39;defenestrate&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">w</span> <span class="ow">in</span> <span class="n">words</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">w</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">w</span><span class="p">))</span>
<span class="gp">...</span>
<span class="go">cat 3</span>
<span class="go">window 6</span>
<span class="go">defenestrate 12</span>
</pre></div>
</div>
<p>Code that modifies a collection while iterating over that same collection can
be tricky to get right.  Instead, it is usually more straight-forward to loop
over a copy of the collection or to create a new collection:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="c1"># Create a sample collection</span>
<span class="n">users</span> <span class="o">=</span> <span class="p">{'{'}</span><span class="s1">&#39;Hans&#39;</span><span class="p">:</span> <span class="s1">&#39;active&#39;</span><span class="p">,</span> <span class="s1">&#39;Éléonore&#39;</span><span class="p">:</span> <span class="s1">&#39;inactive&#39;</span><span class="p">,</span> <span class="s1">&#39;景太郎&#39;</span><span class="p">:</span> <span class="s1">&#39;active&#39;</span><span class="p">{'}'}</span>

<span class="c1"># Strategy:  Iterate over a copy</span>
<span class="k">for</span> <span class="n">user</span><span class="p">,</span> <span class="n">status</span> <span class="ow">in</span> <span class="n">users</span><span class="o">.</span><span class="n">copy</span><span class="p">()</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
  <span class="k">if</span> <span class="n">status</span> <span class="o">==</span> <span class="s1">&#39;inactive&#39;</span><span class="p">:</span>
      <span class="k">del</span> <span class="n">users</span><span class="p">[</span><span class="n">user</span><span class="p">]</span>

<span class="c1"># Strategy:  Create a new collection</span>
<span class="n">active_users</span> <span class="o">=</span> <span class="p">{}</span>
<span class="k">for</span> <span class="n">user</span><span class="p">,</span> <span class="n">status</span> <span class="ow">in</span> <span class="n">users</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
  <span class="k">if</span> <span class="n">status</span> <span class="o">==</span> <span class="s1">&#39;active&#39;</span><span class="p">:</span>
      <span class="n">active_users</span><span class="p">[</span><span class="n">user</span><span class="p">]</span> <span class="o">=</span> <span class="n">status</span>
</pre></div>
</div>
</section>
<section id="the-range-function">
<span id="tut-range"></span><h2><span class="section-number">4.3. </span>The <a class="reference internal" href="../library/stdtypes.html#range" title="range"><code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code></a> Function<a class="headerlink" href="#the-range-function" title="Permalink to this headline">¶</a></h2>
<p>If you do need to iterate over a sequence of numbers, the built-in function
<a class="reference internal" href="../library/stdtypes.html#range" title="range"><code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code></a> comes in handy.  It generates arithmetic progressions:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">0</span>
<span class="go">1</span>
<span class="go">2</span>
<span class="go">3</span>
<span class="go">4</span>
</pre></div>
</div>
<p>The given end point is never part of the generated sequence; <code class="docutils literal notranslate"><span class="pre">range(10)</span></code> generates
10 values, the legal indices for items of a sequence of length 10.  It
is possible to let the range start at another number, or to specify a different
increment (even negative; sometimes this is called the ‘step’):</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">10</span><span class="p">))</span>
<span class="go">[5, 6, 7, 8, 9]</span>

<span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span>
<span class="go">[0, 3, 6, 9]</span>

<span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="o">-</span><span class="mi">10</span><span class="p">,</span> <span class="o">-</span><span class="mi">100</span><span class="p">,</span> <span class="o">-</span><span class="mi">30</span><span class="p">))</span>
<span class="go">[-10, -40, -70]</span>
</pre></div>
</div>
<p>To iterate over the indices of a sequence, you can combine <a class="reference internal" href="../library/stdtypes.html#range" title="range"><code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code></a> and
<a class="reference internal" href="../library/functions.html#len" title="len"><code class="xref py py-func docutils literal notranslate"><span class="pre">len()</span></code></a> as follows:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;Mary&#39;</span><span class="p">,</span> <span class="s1">&#39;had&#39;</span><span class="p">,</span> <span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="s1">&#39;little&#39;</span><span class="p">,</span> <span class="s1">&#39;lamb&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">a</span><span class="p">)):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">a</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
<span class="gp">...</span>
<span class="go">0 Mary</span>
<span class="go">1 had</span>
<span class="go">2 a</span>
<span class="go">3 little</span>
<span class="go">4 lamb</span>
</pre></div>
</div>
<p>In most such cases, however, it is convenient to use the <a class="reference internal" href="../library/functions.html#enumerate" title="enumerate"><code class="xref py py-func docutils literal notranslate"><span class="pre">enumerate()</span></code></a>
function, see <a class="reference internal" href="datastructures.html#tut-loopidioms"><span class="std std-ref">Looping Techniques</span></a>.</p>
<p>A strange thing happens if you just print a range:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">)</span>
<span class="go">range(0, 10)</span>
</pre></div>
</div>
<p>In many ways the object returned by <a class="reference internal" href="../library/stdtypes.html#range" title="range"><code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code></a> behaves as if it is a list,
but in fact it isn’t. It is an object which returns the successive items of
the desired sequence when you iterate over it, but it doesn’t really make
the list, thus saving space.</p>
<p>We say such an object is <a class="reference internal" href="../glossary.html#term-iterable"><span class="xref std std-term">iterable</span></a>, that is, suitable as a target for
functions and constructs that expect something from which they can
obtain successive items until the supply is exhausted.  We have seen that
the <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> statement is such a construct, while an example of a function
that takes an iterable is <a class="reference internal" href="../library/functions.html#sum" title="sum"><code class="xref py py-func docutils literal notranslate"><span class="pre">sum()</span></code></a>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">sum</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">))</span>  <span class="c1"># 0 + 1 + 2 + 3</span>
<span class="go">6</span>
</pre></div>
</div>
<p>Later we will see more functions that return iterables and take iterables as
arguments.  In chapter <a class="reference internal" href="datastructures.html#tut-structures"><span class="std std-ref">Data Structures</span></a>, we will discuss in more detail about
<a class="reference internal" href="../library/stdtypes.html#list" title="list"><code class="xref py py-func docutils literal notranslate"><span class="pre">list()</span></code></a>.</p>
</section>
<section id="break-and-continue-statements-and-else-clauses-on-loops">
<span id="tut-break"></span><h2><span class="section-number">4.4. </span><code class="xref std std-keyword docutils literal notranslate"><span class="pre">break</span></code> and <code class="xref std std-keyword docutils literal notranslate"><span class="pre">continue</span></code> Statements, and <code class="xref std std-keyword docutils literal notranslate"><span class="pre">else</span></code> Clauses on Loops<a class="headerlink" href="#break-and-continue-statements-and-else-clauses-on-loops" title="Permalink to this headline">¶</a></h2>
<p>The <a class="reference internal" href="../reference/simple_stmts.html#break"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">break</span></code></a> statement, like in C, breaks out of the innermost enclosing
<a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> or <a class="reference internal" href="../reference/compound_stmts.html#while"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">while</span></code></a> loop.</p>
<p>Loop statements may have an <code class="xref std std-keyword docutils literal notranslate"><span class="pre">else</span></code> clause; it is executed when the loop
terminates through exhaustion of the iterable (with <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a>) or when the
condition becomes false (with <a class="reference internal" href="../reference/compound_stmts.html#while"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">while</span></code></a>), but not when the loop is
terminated by a <a class="reference internal" href="../reference/simple_stmts.html#break"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">break</span></code></a> statement.  This is exemplified by the
following loop, which searches for prime numbers:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">n</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">10</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="n">n</span><span class="p">):</span>
<span class="gp">... </span>        <span class="k">if</span> <span class="n">n</span> <span class="o">%</span> <span class="n">x</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="gp">... </span>            <span class="nb">print</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="s1">&#39;equals&#39;</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="s1">&#39;*&#39;</span><span class="p">,</span> <span class="n">n</span><span class="o">//</span><span class="n">x</span><span class="p">)</span>
<span class="gp">... </span>            <span class="k">break</span>
<span class="gp">... </span>    <span class="k">else</span><span class="p">:</span>
<span class="gp">... </span>        <span class="c1"># loop fell through without finding a factor</span>
<span class="gp">... </span>        <span class="nb">print</span><span class="p">(</span><span class="n">n</span><span class="p">,</span> <span class="s1">&#39;is a prime number&#39;</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">2 is a prime number</span>
<span class="go">3 is a prime number</span>
<span class="go">4 equals 2 * 2</span>
<span class="go">5 is a prime number</span>
<span class="go">6 equals 2 * 3</span>
<span class="go">7 is a prime number</span>
<span class="go">8 equals 2 * 4</span>
<span class="go">9 equals 3 * 3</span>
</pre></div>
</div>
<p>(Yes, this is the correct code.  Look closely: the <code class="docutils literal notranslate"><span class="pre">else</span></code> clause belongs to
the <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> loop, <strong>not</strong> the <a class="reference internal" href="../reference/compound_stmts.html#if"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code></a> statement.)</p>
<p>When used with a loop, the <code class="docutils literal notranslate"><span class="pre">else</span></code> clause has more in common with the
<code class="docutils literal notranslate"><span class="pre">else</span></code> clause of a <a class="reference internal" href="../reference/compound_stmts.html#try"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">try</span></code></a> statement than it does with that of
<a class="reference internal" href="../reference/compound_stmts.html#if"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code></a> statements: a <a class="reference internal" href="../reference/compound_stmts.html#try"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">try</span></code></a> statement’s <code class="docutils literal notranslate"><span class="pre">else</span></code> clause runs
when no exception occurs, and a loop’s <code class="docutils literal notranslate"><span class="pre">else</span></code> clause runs when no <code class="docutils literal notranslate"><span class="pre">break</span></code>
occurs. For more on the <code class="xref std std-keyword docutils literal notranslate"><span class="pre">try</span></code> statement and exceptions, see
<a class="reference internal" href="errors.html#tut-handling"><span class="std std-ref">Handling Exceptions</span></a>.</p>
<p>The <a class="reference internal" href="../reference/simple_stmts.html#continue"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">continue</span></code></a> statement, also borrowed from C, continues with the next
iteration of the loop:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">num</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">10</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">if</span> <span class="n">num</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
<span class="gp">... </span>        <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Found an even number&quot;</span><span class="p">,</span> <span class="n">num</span><span class="p">)</span>
<span class="gp">... </span>        <span class="k">continue</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Found an odd number&quot;</span><span class="p">,</span> <span class="n">num</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">Found an even number 2</span>
<span class="go">Found an odd number 3</span>
<span class="go">Found an even number 4</span>
<span class="go">Found an odd number 5</span>
<span class="go">Found an even number 6</span>
<span class="go">Found an odd number 7</span>
<span class="go">Found an even number 8</span>
<span class="go">Found an odd number 9</span>
</pre></div>
</div>
</section>
<section id="pass-statements">
<span id="tut-pass"></span><h2><span class="section-number">4.5. </span><code class="xref std std-keyword docutils literal notranslate"><span class="pre">pass</span></code> Statements<a class="headerlink" href="#pass-statements" title="Permalink to this headline">¶</a></h2>
<p>The <a class="reference internal" href="../reference/simple_stmts.html#pass"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">pass</span></code></a> statement does nothing. It can be used when a statement is
required syntactically but the program requires no action. For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">while</span> <span class="kc">True</span><span class="p">:</span>
<span class="gp">... </span>    <span class="k">pass</span>  <span class="c1"># Busy-wait for keyboard interrupt (Ctrl+C)</span>
<span class="gp">...</span>
</pre></div>
</div>
<p>This is commonly used for creating minimal classes:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">class</span> <span class="nc">MyEmptyClass</span><span class="p">:</span>
<span class="gp">... </span>    <span class="k">pass</span>
<span class="gp">...</span>
</pre></div>
</div>
<p>Another place <a class="reference internal" href="../reference/simple_stmts.html#pass"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">pass</span></code></a> can be used is as a place-holder for a function or
conditional body when you are working on new code, allowing you to keep thinking
at a more abstract level.  The <code class="xref std std-keyword docutils literal notranslate"><span class="pre">pass</span></code> is silently ignored:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">initlog</span><span class="p">(</span><span class="o">*</span><span class="n">args</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">pass</span>   <span class="c1"># Remember to implement this!</span>
<span class="gp">...</span>
</pre></div>
</div>
</section>
<section id="match-statements">
<span id="tut-match"></span><h2><span class="section-number">4.6. </span><code class="xref std std-keyword docutils literal notranslate"><span class="pre">match</span></code> Statements<a class="headerlink" href="#match-statements" title="Permalink to this headline">¶</a></h2>
<p>A <a class="reference internal" href="../reference/compound_stmts.html#match"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">match</span></code></a> statement takes an expression and compares its value to successive
patterns given as one or more case blocks.  This is superficially
similar to a switch statement in C, Java or JavaScript (and many
other languages), but it’s more similar to pattern matching in
languages like Rust or Haskell. Only the first pattern that matches
gets executed and it can also extract components (sequence elements
or object attributes) from the value into variables.</p>
<p>The simplest form compares a subject value against one or more literals:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">http_error</span><span class="p">(</span><span class="n">status</span><span class="p">):</span>
  <span class="k">match</span> <span class="n">status</span><span class="p">:</span>
      <span class="k">case</span> <span class="mi">400</span><span class="p">:</span>
          <span class="k">return</span> <span class="s2">&quot;Bad request&quot;</span>
      <span class="k">case</span> <span class="mi">404</span><span class="p">:</span>
          <span class="k">return</span> <span class="s2">&quot;Not found&quot;</span>
      <span class="k">case</span> <span class="mi">418</span><span class="p">:</span>
          <span class="k">return</span> <span class="s2">&quot;I&#39;m a teapot&quot;</span>
      <span class="k">case</span> <span class="k">_</span><span class="p">:</span>
          <span class="k">return</span> <span class="s2">&quot;Something&#39;s wrong with the internet&quot;</span>
</pre></div>
</div>
<p>Note the last block: the “variable name” <code class="docutils literal notranslate"><span class="pre">_</span></code> acts as a <em>wildcard</em> and
never fails to match. If no case matches, none of the branches is executed.</p>
<p>You can combine several literals in a single pattern using <code class="docutils literal notranslate"><span class="pre">|</span></code> (“or”):</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">case</span> <span class="mi">401</span> <span class="o">|</span> <span class="mi">403</span> <span class="o">|</span> <span class="mi">404</span><span class="p">:</span>
  <span class="k">return</span> <span class="s2">&quot;Not allowed&quot;</span>
</pre></div>
</div>
<p>Patterns can look like unpacking assignments, and can be used to bind
variables:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="c1"># point is an (x, y) tuple</span>
<span class="k">match</span> <span class="n">point</span><span class="p">:</span>
  <span class="k">case</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Origin&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Y=</span><span class="si">{'{'}</span><span class="n">y</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="mi">0</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;X=</span><span class="si">{'{'}</span><span class="n">x</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;X=</span><span class="si">{'{'}</span><span class="n">x</span><span class="si">{'}'}</span><span class="s2">, Y=</span><span class="si">{'{'}</span><span class="n">y</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="k">_</span><span class="p">:</span>
      <span class="k">raise</span> <span class="ne">ValueError</span><span class="p">(</span><span class="s2">&quot;Not a point&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>Study that one carefully!  The first pattern has two literals, and can
be thought of as an extension of the literal pattern shown above.  But
the next two patterns combine a literal and a variable, and the
variable <em>binds</em> a value from the subject (<code class="docutils literal notranslate"><span class="pre">point</span></code>).  The fourth
pattern captures two values, which makes it conceptually similar to
the unpacking assignment <code class="docutils literal notranslate"><span class="pre">(x,</span> <span class="pre">y)</span> <span class="pre">=</span> <span class="pre">point</span></code>.</p>
<p>If you are using classes to structure your data
you can use the class name followed by an argument list resembling a
constructor, but with the ability to capture attributes into variables:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">Point</span><span class="p">:</span>
  <span class="k">def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
      <span class="bp">self</span><span class="o">.</span><span class="n">x</span> <span class="o">=</span> <span class="n">x</span>
      <span class="bp">self</span><span class="o">.</span><span class="n">y</span> <span class="o">=</span> <span class="n">y</span>

<span class="k">def</span> <span class="nf">where_is</span><span class="p">(</span><span class="n">point</span><span class="p">):</span>
  <span class="k">match</span> <span class="n">point</span><span class="p">:</span>
      <span class="k">case</span> <span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="mi">0</span><span class="p">):</span>
          <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Origin&quot;</span><span class="p">)</span>
      <span class="k">case</span> <span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="n">y</span><span class="p">):</span>
          <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Y=</span><span class="si">{'{'}</span><span class="n">y</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
      <span class="k">case</span> <span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="mi">0</span><span class="p">):</span>
          <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;X=</span><span class="si">{'{'}</span><span class="n">x</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
      <span class="k">case</span> <span class="n">Point</span><span class="p">():</span>
          <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Somewhere else&quot;</span><span class="p">)</span>
      <span class="k">case</span> <span class="k">_</span><span class="p">:</span>
          <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Not a point&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>You can use positional parameters with some builtin classes that provide an
ordering for their attributes (e.g. dataclasses). You can also define a specific
position for attributes in patterns by setting the <code class="docutils literal notranslate"><span class="pre">__match_args__</span></code> special
attribute in your classes. If it’s set to (“x”, “y”), the following patterns are all
equivalent (and all bind the <code class="docutils literal notranslate"><span class="pre">y</span></code> attribute to the <code class="docutils literal notranslate"><span class="pre">var</span></code> variable):</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">Point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">var</span><span class="p">)</span>
<span class="n">Point</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="n">var</span><span class="p">)</span>
<span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="n">var</span><span class="p">)</span>
<span class="n">Point</span><span class="p">(</span><span class="n">y</span><span class="o">=</span><span class="n">var</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
</pre></div>
</div>
<p>A recommended way to read patterns is to look at them as an extended form of what you
would put on the left of an assignment, to understand which variables would be set to
what.
Only the standalone names (like <code class="docutils literal notranslate"><span class="pre">var</span></code> above) are assigned to by a match statement.
Dotted names (like <code class="docutils literal notranslate"><span class="pre">foo.bar</span></code>), attribute names (the <code class="docutils literal notranslate"><span class="pre">x=</span></code> and <code class="docutils literal notranslate"><span class="pre">y=</span></code> above) or class names
(recognized by the “(…)” next to them like <code class="docutils literal notranslate"><span class="pre">Point</span></code> above) are never assigned to.</p>
<p>Patterns can be arbitrarily nested.  For example, if we have a short
list of Points, with <code class="docutils literal notranslate"><span class="pre">__match_args__</span></code> added, we could match it like this:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">class</span> <span class="nc">Point</span><span class="p">:</span>
  <span class="n">__match_args__</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;x&#39;</span><span class="p">,</span> <span class="s1">&#39;y&#39;</span><span class="p">)</span>
  <span class="k">def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
      <span class="bp">self</span><span class="o">.</span><span class="n">x</span> <span class="o">=</span> <span class="n">x</span>
      <span class="bp">self</span><span class="o">.</span><span class="n">y</span> <span class="o">=</span> <span class="n">y</span>

<span class="k">match</span> <span class="n">points</span><span class="p">:</span>
  <span class="k">case</span> <span class="p">[]:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;No points&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">[</span><span class="n">Point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">)]:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;The origin&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">[</span><span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">)]:</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Single point </span><span class="si">{'{'}</span><span class="n">x</span><span class="si">{'}'}</span><span class="s2">, </span><span class="si">{'{'}</span><span class="n">y</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="p">[</span><span class="n">Point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">y1</span><span class="p">),</span> <span class="n">Point</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">y2</span><span class="p">)]:</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Two on the Y axis at </span><span class="si">{'{'}</span><span class="n">y1</span><span class="si">{'}'}</span><span class="s2">, </span><span class="si">{'{'}</span><span class="n">y2</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="k">_</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Something else&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>We can add an <code class="docutils literal notranslate"><span class="pre">if</span></code> clause to a pattern, known as a “guard”.  If the
guard is false, <code class="docutils literal notranslate"><span class="pre">match</span></code> goes on to try the next case block.  Note
that value capture happens before the guard is evaluated:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">match</span> <span class="n">point</span><span class="p">:</span>
  <span class="k">case</span> <span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span> <span class="k">if</span> <span class="n">x</span> <span class="o">==</span> <span class="n">y</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Y=X at </span><span class="si">{'{'}</span><span class="n">x</span><span class="si">{'}'}</span><span class="s2">&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="n">Point</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="sa">f</span><span class="s2">&quot;Not on the diagonal&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>Several other key features of this statement:</p>
<ul>
<li><p>Like unpacking assignments, tuple and list patterns have exactly the
same meaning and actually match arbitrary sequences.  An important
exception is that they don’t match iterators or strings.</p></li>
<li><p>Sequence patterns support extended unpacking: <code class="docutils literal notranslate"><span class="pre">[x,</span> <span class="pre">y,</span> <span class="pre">*rest]</span></code> and <code class="docutils literal notranslate"><span class="pre">(x,</span> <span class="pre">y,</span>
<span class="pre">*rest)</span></code> work similar to unpacking assignments.  The
name after <code class="docutils literal notranslate"><span class="pre">*</span></code> may also be <code class="docutils literal notranslate"><span class="pre">_</span></code>, so <code class="docutils literal notranslate"><span class="pre">(x,</span> <span class="pre">y,</span> <span class="pre">*_)</span></code> matches a sequence
of at least two items without binding the remaining items.</p></li>
<li><p>Mapping patterns: <code class="docutils literal notranslate"><span class="pre">{'{'}&quot;bandwidth&quot;:</span> <span class="pre">b,</span> <span class="pre">&quot;latency&quot;:</span> <span class="pre">l{'}'}</span></code> captures the
<code class="docutils literal notranslate"><span class="pre">&quot;bandwidth&quot;</span></code> and <code class="docutils literal notranslate"><span class="pre">&quot;latency&quot;</span></code> values from a dictionary.  Unlike sequence
patterns, extra keys are ignored.  An unpacking like <code class="docutils literal notranslate"><span class="pre">**rest</span></code> is also
supported.  (But <code class="docutils literal notranslate"><span class="pre">**_</span></code> would be redundant, so it is not allowed.)</p></li>
<li><p>Subpatterns may be captured using the <code class="docutils literal notranslate"><span class="pre">as</span></code> keyword:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">case</span> <span class="p">(</span><span class="n">Point</span><span class="p">(</span><span class="n">x1</span><span class="p">,</span> <span class="n">y1</span><span class="p">),</span> <span class="n">Point</span><span class="p">(</span><span class="n">x2</span><span class="p">,</span> <span class="n">y2</span><span class="p">)</span> <span class="k">as</span> <span class="n">p2</span><span class="p">):</span> <span class="o">...</span>
</pre></div>
</div>
<p>will capture the second element of the input as <code class="docutils literal notranslate"><span class="pre">p2</span></code> (as long as the input is
a sequence of two points)</p>
</li>
<li><p>Most literals are compared by equality, however the singletons <code class="docutils literal notranslate"><span class="pre">True</span></code>,
<code class="docutils literal notranslate"><span class="pre">False</span></code> and <code class="docutils literal notranslate"><span class="pre">None</span></code> are compared by identity.</p></li>
<li><p>Patterns may use named constants.  These must be dotted names
to prevent them from being interpreted as capture variable:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="kn">from</span> <span class="nn">enum</span> <span class="kn">import</span> <span class="n">Enum</span>
<span class="k">class</span> <span class="nc">Color</span><span class="p">(</span><span class="n">Enum</span><span class="p">):</span>
  <span class="n">RED</span> <span class="o">=</span> <span class="s1">&#39;red&#39;</span>
  <span class="n">GREEN</span> <span class="o">=</span> <span class="s1">&#39;green&#39;</span>
  <span class="n">BLUE</span> <span class="o">=</span> <span class="s1">&#39;blue&#39;</span>

<span class="n">color</span> <span class="o">=</span> <span class="n">Color</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="s2">&quot;Enter your choice of &#39;red&#39;, &#39;blue&#39; or &#39;green&#39;: &quot;</span><span class="p">))</span>

<span class="k">match</span> <span class="n">color</span><span class="p">:</span>
  <span class="k">case</span> <span class="n">Color</span><span class="o">.</span><span class="n">RED</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;I see red!&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="n">Color</span><span class="o">.</span><span class="n">GREEN</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Grass is green&quot;</span><span class="p">)</span>
  <span class="k">case</span> <span class="n">Color</span><span class="o">.</span><span class="n">BLUE</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;I&#39;m feeling the blues :(&quot;</span><span class="p">)</span>
</pre></div>
</div>
</li>
</ul>
<p>For a more detailed explanation and additional examples, you can look into
<span class="target" id="index-1"></span><a class="pep reference external" href="https://peps.python.org/pep-0636/"><strong>PEP 636</strong></a> which is written in a tutorial format.</p>
</section>
<section id="defining-functions">
<span id="tut-functions"></span><h2><span class="section-number">4.7. </span>Defining Functions<a class="headerlink" href="#defining-functions" title="Permalink to this headline">¶</a></h2>
<p>We can create a function that writes the Fibonacci series to an arbitrary
boundary:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">fib</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>    <span class="c1"># write Fibonacci series up to n</span>
<span class="gp">... </span>    <span class="sd">&quot;&quot;&quot;Print a Fibonacci series up to n.&quot;&quot;&quot;</span>
<span class="gp">... </span>    <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span>
<span class="gp">... </span>    <span class="k">while</span> <span class="n">a</span> <span class="o">&lt;</span> <span class="n">n</span><span class="p">:</span>
<span class="gp">... </span>        <span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s1">&#39; &#39;</span><span class="p">)</span>
<span class="gp">... </span>        <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="o">+</span><span class="n">b</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">()</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># Now call the function we just defined:</span>
<span class="gp">... </span><span class="n">fib</span><span class="p">(</span><span class="mi">2000</span><span class="p">)</span>
<span class="go">0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597</span>
</pre></div>
</div>
<p id="index-2">The keyword <a class="reference internal" href="../reference/compound_stmts.html#def"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">def</span></code></a> introduces a function <em>definition</em>.  It must be
followed by the function name and the parenthesized list of formal parameters.
The statements that form the body of the function start at the next line, and
must be indented.</p>
<p>The first statement of the function body can optionally be a string literal;
this string literal is the function’s documentation string, or <em class="dfn">docstring</em>.
(More about docstrings can be found in the section <a class="reference internal" href="#tut-docstrings"><span class="std std-ref">Documentation Strings</span></a>.)
There are tools which use docstrings to automatically produce online or printed
documentation, or to let the user interactively browse through code; it’s good
practice to include docstrings in code that you write, so make a habit of it.</p>
<p>The <em>execution</em> of a function introduces a new symbol table used for the local
variables of the function.  More precisely, all variable assignments in a
function store the value in the local symbol table; whereas variable references
first look in the local symbol table, then in the local symbol tables of
enclosing functions, then in the global symbol table, and finally in the table
of built-in names. Thus, global variables and variables of enclosing functions
cannot be directly assigned a value within a function (unless, for global
variables, named in a <a class="reference internal" href="../reference/simple_stmts.html#global"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">global</span></code></a> statement, or, for variables of enclosing
functions, named in a <a class="reference internal" href="../reference/simple_stmts.html#nonlocal"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">nonlocal</span></code></a> statement), although they may be
referenced.</p>
<p>The actual parameters (arguments) to a function call are introduced in the local
symbol table of the called function when it is called; thus, arguments are
passed using <em>call by value</em> (where the <em>value</em> is always an object <em>reference</em>,
not the value of the object). <a class="footnote-reference brackets" href="#id2" id="id1">1</a> When a function calls another function,
or calls itself recursively, a new
local symbol table is created for that call.</p>
<p>A function definition associates the function name with the function object in
the current symbol table.  The interpreter recognizes the object pointed to by
that name as a user-defined function.  Other names can also point to that same
function object and can also be used to access the function:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">fib</span>
<span class="go">&lt;function fib at 10042ed0&gt;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span> <span class="o">=</span> <span class="n">fib</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span><span class="p">(</span><span class="mi">100</span><span class="p">)</span>
<span class="go">0 1 1 2 3 5 8 13 21 34 55 89</span>
</pre></div>
</div>
<p>Coming from other languages, you might object that <code class="docutils literal notranslate"><span class="pre">fib</span></code> is not a function but
a procedure since it doesn’t return a value.  In fact, even functions without a
<a class="reference internal" href="../reference/simple_stmts.html#return"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">return</span></code></a> statement do return a value, albeit a rather boring one.  This
value is called <code class="docutils literal notranslate"><span class="pre">None</span></code> (it’s a built-in name).  Writing the value <code class="docutils literal notranslate"><span class="pre">None</span></code> is
normally suppressed by the interpreter if it would be the only value written.
You can see it if you really want to using <a class="reference internal" href="../library/functions.html#print" title="print"><code class="xref py py-func docutils literal notranslate"><span class="pre">print()</span></code></a>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">fib</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="n">fib</span><span class="p">(</span><span class="mi">0</span><span class="p">))</span>
<span class="go">None</span>
</pre></div>
</div>
<p>It is simple to write a function that returns a list of the numbers of the
Fibonacci series, instead of printing it:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">fib2</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>  <span class="c1"># return Fibonacci series up to n</span>
<span class="gp">... </span>    <span class="sd">&quot;&quot;&quot;Return a list containing the Fibonacci series up to n.&quot;&quot;&quot;</span>
<span class="gp">... </span>    <span class="n">result</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">... </span>    <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">1</span>
<span class="gp">... </span>    <span class="k">while</span> <span class="n">a</span> <span class="o">&lt;</span> <span class="n">n</span><span class="p">:</span>
<span class="gp">... </span>        <span class="n">result</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>    <span class="c1"># see below</span>
<span class="gp">... </span>        <span class="n">a</span><span class="p">,</span> <span class="n">b</span> <span class="o">=</span> <span class="n">b</span><span class="p">,</span> <span class="n">a</span><span class="o">+</span><span class="n">b</span>
<span class="gp">... </span>    <span class="k">return</span> <span class="n">result</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f100</span> <span class="o">=</span> <span class="n">fib2</span><span class="p">(</span><span class="mi">100</span><span class="p">)</span>    <span class="c1"># call it</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f100</span>                <span class="c1"># write the result</span>
<span class="go">[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]</span>
</pre></div>
</div>
<p>This example, as usual, demonstrates some new Python features:</p>
<ul class="simple">
<li><p>The <a class="reference internal" href="../reference/simple_stmts.html#return"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">return</span></code></a> statement returns with a value from a function.
<code class="xref std std-keyword docutils literal notranslate"><span class="pre">return</span></code> without an expression argument returns <code class="docutils literal notranslate"><span class="pre">None</span></code>. Falling off
the end of a function also returns <code class="docutils literal notranslate"><span class="pre">None</span></code>.</p></li>
<li><p>The statement <code class="docutils literal notranslate"><span class="pre">result.append(a)</span></code> calls a <em>method</em> of the list object
<code class="docutils literal notranslate"><span class="pre">result</span></code>.  A method is a function that ‘belongs’ to an object and is named
<code class="docutils literal notranslate"><span class="pre">obj.methodname</span></code>, where <code class="docutils literal notranslate"><span class="pre">obj</span></code> is some object (this may be an expression),
and <code class="docutils literal notranslate"><span class="pre">methodname</span></code> is the name of a method that is defined by the object’s type.
Different types define different methods.  Methods of different types may have
the same name without causing ambiguity.  (It is possible to define your own
object types and methods, using <em>classes</em>, see <a class="reference internal" href="classes.html#tut-classes"><span class="std std-ref">Classes</span></a>)
The method <code class="xref py py-meth docutils literal notranslate"><span class="pre">append()</span></code> shown in the example is defined for list objects; it
adds a new element at the end of the list.  In this example it is equivalent to
<code class="docutils literal notranslate"><span class="pre">result</span> <span class="pre">=</span> <span class="pre">result</span> <span class="pre">+</span> <span class="pre">[a]</span></code>, but more efficient.</p></li>
</ul>
</section>
<section id="more-on-defining-functions">
<span id="tut-defining"></span><h2><span class="section-number">4.8. </span>More on Defining Functions<a class="headerlink" href="#more-on-defining-functions" title="Permalink to this headline">¶</a></h2>
<p>It is also possible to define functions with a variable number of arguments.
There are three forms, which can be combined.</p>
<section id="default-argument-values">
<span id="tut-defaultargs"></span><h3><span class="section-number">4.8.1. </span>Default Argument Values<a class="headerlink" href="#default-argument-values" title="Permalink to this headline">¶</a></h3>
<p>The most useful form is to specify a default value for one or more arguments.
This creates a function that can be called with fewer arguments than it is
defined to allow.  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">ask_ok</span><span class="p">(</span><span class="n">prompt</span><span class="p">,</span> <span class="n">retries</span><span class="o">=</span><span class="mi">4</span><span class="p">,</span> <span class="n">reminder</span><span class="o">=</span><span class="s1">&#39;Please try again!&#39;</span><span class="p">):</span>
  <span class="k">while</span> <span class="kc">True</span><span class="p">:</span>
      <span class="n">ok</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="n">prompt</span><span class="p">)</span>
      <span class="k">if</span> <span class="n">ok</span> <span class="ow">in</span> <span class="p">(</span><span class="s1">&#39;y&#39;</span><span class="p">,</span> <span class="s1">&#39;ye&#39;</span><span class="p">,</span> <span class="s1">&#39;yes&#39;</span><span class="p">):</span>
          <span class="k">return</span> <span class="kc">True</span>
      <span class="k">if</span> <span class="n">ok</span> <span class="ow">in</span> <span class="p">(</span><span class="s1">&#39;n&#39;</span><span class="p">,</span> <span class="s1">&#39;no&#39;</span><span class="p">,</span> <span class="s1">&#39;nop&#39;</span><span class="p">,</span> <span class="s1">&#39;nope&#39;</span><span class="p">):</span>
          <span class="k">return</span> <span class="kc">False</span>
      <span class="n">retries</span> <span class="o">=</span> <span class="n">retries</span> <span class="o">-</span> <span class="mi">1</span>
      <span class="k">if</span> <span class="n">retries</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">:</span>
          <span class="k">raise</span> <span class="ne">ValueError</span><span class="p">(</span><span class="s1">&#39;invalid user response&#39;</span><span class="p">)</span>
      <span class="nb">print</span><span class="p">(</span><span class="n">reminder</span><span class="p">)</span>
</pre></div>
</div>
<p>This function can be called in several ways:</p>
<ul class="simple">
<li><p>giving only the mandatory argument:
<code class="docutils literal notranslate"><span class="pre">ask_ok('Do</span> <span class="pre">you</span> <span class="pre">really</span> <span class="pre">want</span> <span class="pre">to</span> <span class="pre">quit?')</span></code></p></li>
<li><p>giving one of the optional arguments:
<code class="docutils literal notranslate"><span class="pre">ask_ok('OK</span> <span class="pre">to</span> <span class="pre">overwrite</span> <span class="pre">the</span> <span class="pre">file?',</span> <span class="pre">2)</span></code></p></li>
<li><p>or even giving all arguments:
<code class="docutils literal notranslate"><span class="pre">ask_ok('OK</span> <span class="pre">to</span> <span class="pre">overwrite</span> <span class="pre">the</span> <span class="pre">file?',</span> <span class="pre">2,</span> <span class="pre">'Come</span> <span class="pre">on,</span> <span class="pre">only</span> <span class="pre">yes</span> <span class="pre">or</span> <span class="pre">no!')</span></code></p></li>
</ul>
<p>This example also introduces the <a class="reference internal" href="../reference/expressions.html#in"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">in</span></code></a> keyword. This tests whether or
not a sequence contains a certain value.</p>
<p>The default values are evaluated at the point of function definition in the
<em>defining</em> scope, so that</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">i</span> <span class="o">=</span> <span class="mi">5</span>

<span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">arg</span><span class="o">=</span><span class="n">i</span><span class="p">):</span>
  <span class="nb">print</span><span class="p">(</span><span class="n">arg</span><span class="p">)</span>

<span class="n">i</span> <span class="o">=</span> <span class="mi">6</span>
<span class="n">f</span><span class="p">()</span>
</pre></div>
</div>
<p>will print <code class="docutils literal notranslate"><span class="pre">5</span></code>.</p>
<p><strong>Important warning:</strong>  The default value is evaluated only once. This makes a
difference when the default is a mutable object such as a list, dictionary, or
instances of most classes.  For example, the following function accumulates the
arguments passed to it on subsequent calls:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">L</span><span class="o">=</span><span class="p">[]):</span>
  <span class="n">L</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
  <span class="k">return</span> <span class="n">L</span>

<span class="nb">print</span><span class="p">(</span><span class="n">f</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">f</span><span class="p">(</span><span class="mi">2</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">f</span><span class="p">(</span><span class="mi">3</span><span class="p">))</span>
</pre></div>
</div>
<p>This will print</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]</span>
<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>
</pre></div>
</div>
<p>If you don’t want the default to be shared between subsequent calls, you can
write the function like this instead:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">a</span><span class="p">,</span> <span class="n">L</span><span class="o">=</span><span class="kc">None</span><span class="p">):</span>
  <span class="k">if</span> <span class="n">L</span> <span class="ow">is</span> <span class="kc">None</span><span class="p">:</span>
      <span class="n">L</span> <span class="o">=</span> <span class="p">[]</span>
  <span class="n">L</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
  <span class="k">return</span> <span class="n">L</span>
</pre></div>
</div>
</section>
<section id="keyword-arguments">
<span id="tut-keywordargs"></span><h3><span class="section-number">4.8.2. </span>Keyword Arguments<a class="headerlink" href="#keyword-arguments" title="Permalink to this headline">¶</a></h3>
<p>Functions can also be called using <a class="reference internal" href="../glossary.html#term-keyword-argument"><span class="xref std std-term">keyword arguments</span></a>
of the form <code class="docutils literal notranslate"><span class="pre">kwarg=value</span></code>.  For instance, the following function:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">parrot</span><span class="p">(</span><span class="n">voltage</span><span class="p">,</span> <span class="n">state</span><span class="o">=</span><span class="s1">&#39;a stiff&#39;</span><span class="p">,</span> <span class="n">action</span><span class="o">=</span><span class="s1">&#39;voom&#39;</span><span class="p">,</span> <span class="nb">type</span><span class="o">=</span><span class="s1">&#39;Norwegian Blue&#39;</span><span class="p">):</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- This parrot wouldn&#39;t&quot;</span><span class="p">,</span> <span class="n">action</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s1">&#39; &#39;</span><span class="p">)</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;if you put&quot;</span><span class="p">,</span> <span class="n">voltage</span><span class="p">,</span> <span class="s2">&quot;volts through it.&quot;</span><span class="p">)</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- Lovely plumage, the&quot;</span><span class="p">,</span> <span class="nb">type</span><span class="p">)</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- It&#39;s&quot;</span><span class="p">,</span> <span class="n">state</span><span class="p">,</span> <span class="s2">&quot;!&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>accepts one required argument (<code class="docutils literal notranslate"><span class="pre">voltage</span></code>) and three optional arguments
(<code class="docutils literal notranslate"><span class="pre">state</span></code>, <code class="docutils literal notranslate"><span class="pre">action</span></code>, and <code class="docutils literal notranslate"><span class="pre">type</span></code>).  This function can be called in any
of the following ways:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">parrot</span><span class="p">(</span><span class="mi">1000</span><span class="p">)</span>                                          <span class="c1"># 1 positional argument</span>
<span class="n">parrot</span><span class="p">(</span><span class="n">voltage</span><span class="o">=</span><span class="mi">1000</span><span class="p">)</span>                                  <span class="c1"># 1 keyword argument</span>
<span class="n">parrot</span><span class="p">(</span><span class="n">voltage</span><span class="o">=</span><span class="mi">1000000</span><span class="p">,</span> <span class="n">action</span><span class="o">=</span><span class="s1">&#39;VOOOOOM&#39;</span><span class="p">)</span>             <span class="c1"># 2 keyword arguments</span>
<span class="n">parrot</span><span class="p">(</span><span class="n">action</span><span class="o">=</span><span class="s1">&#39;VOOOOOM&#39;</span><span class="p">,</span> <span class="n">voltage</span><span class="o">=</span><span class="mi">1000000</span><span class="p">)</span>             <span class="c1"># 2 keyword arguments</span>
<span class="n">parrot</span><span class="p">(</span><span class="s1">&#39;a million&#39;</span><span class="p">,</span> <span class="s1">&#39;bereft of life&#39;</span><span class="p">,</span> <span class="s1">&#39;jump&#39;</span><span class="p">)</span>         <span class="c1"># 3 positional arguments</span>
<span class="n">parrot</span><span class="p">(</span><span class="s1">&#39;a thousand&#39;</span><span class="p">,</span> <span class="n">state</span><span class="o">=</span><span class="s1">&#39;pushing up the daisies&#39;</span><span class="p">)</span>  <span class="c1"># 1 positional, 1 keyword</span>
</pre></div>
</div>
<p>but all the following calls would be invalid:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">parrot</span><span class="p">()</span>                     <span class="c1"># required argument missing</span>
<span class="n">parrot</span><span class="p">(</span><span class="n">voltage</span><span class="o">=</span><span class="mf">5.0</span><span class="p">,</span> <span class="s1">&#39;dead&#39;</span><span class="p">)</span>  <span class="c1"># non-keyword argument after a keyword argument</span>
<span class="n">parrot</span><span class="p">(</span><span class="mi">110</span><span class="p">,</span> <span class="n">voltage</span><span class="o">=</span><span class="mi">220</span><span class="p">)</span>     <span class="c1"># duplicate value for the same argument</span>
<span class="n">parrot</span><span class="p">(</span><span class="n">actor</span><span class="o">=</span><span class="s1">&#39;John Cleese&#39;</span><span class="p">)</span>  <span class="c1"># unknown keyword argument</span>
</pre></div>
</div>
<p>In a function call, keyword arguments must follow positional arguments.
All the keyword arguments passed must match one of the arguments
accepted by the function (e.g. <code class="docutils literal notranslate"><span class="pre">actor</span></code> is not a valid argument for the
<code class="docutils literal notranslate"><span class="pre">parrot</span></code> function), and their order is not important.  This also includes
non-optional arguments (e.g. <code class="docutils literal notranslate"><span class="pre">parrot(voltage=1000)</span></code> is valid too).
No argument may receive a value more than once.
Here’s an example that fails due to this restriction:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">function</span><span class="p">(</span><span class="n">a</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">pass</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">function</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">a</span><span class="o">=</span><span class="mi">0</span><span class="p">)</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">function() got multiple values for argument &#39;a&#39;</span>
</pre></div>
</div>
<p>When a final formal parameter of the form <code class="docutils literal notranslate"><span class="pre">**name</span></code> is present, it receives a
dictionary (see <a class="reference internal" href="../library/stdtypes.html#typesmapping"><span class="std std-ref">Mapping Types — dict</span></a>) containing all keyword arguments except for
those corresponding to a formal parameter.  This may be combined with a formal
parameter of the form <code class="docutils literal notranslate"><span class="pre">*name</span></code> (described in the next subsection) which
receives a <a class="reference internal" href="datastructures.html#tut-tuples"><span class="std std-ref">tuple</span></a> containing the positional
arguments beyond the formal parameter list.  (<code class="docutils literal notranslate"><span class="pre">*name</span></code> must occur
before <code class="docutils literal notranslate"><span class="pre">**name</span></code>.) For example, if we define a function like this:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">cheeseshop</span><span class="p">(</span><span class="n">kind</span><span class="p">,</span> <span class="o">*</span><span class="n">arguments</span><span class="p">,</span> <span class="o">**</span><span class="n">keywords</span><span class="p">):</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- Do you have any&quot;</span><span class="p">,</span> <span class="n">kind</span><span class="p">,</span> <span class="s2">&quot;?&quot;</span><span class="p">)</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- I&#39;m sorry, we&#39;re all out of&quot;</span><span class="p">,</span> <span class="n">kind</span><span class="p">)</span>
  <span class="k">for</span> <span class="n">arg</span> <span class="ow">in</span> <span class="n">arguments</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="n">arg</span><span class="p">)</span>
  <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-&quot;</span> <span class="o">*</span> <span class="mi">40</span><span class="p">)</span>
  <span class="k">for</span> <span class="n">kw</span> <span class="ow">in</span> <span class="n">keywords</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="n">kw</span><span class="p">,</span> <span class="s2">&quot;:&quot;</span><span class="p">,</span> <span class="n">keywords</span><span class="p">[</span><span class="n">kw</span><span class="p">])</span>
</pre></div>
</div>
<p>It could be called like this:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">cheeseshop</span><span class="p">(</span><span class="s2">&quot;Limburger&quot;</span><span class="p">,</span> <span class="s2">&quot;It&#39;s very runny, sir.&quot;</span><span class="p">,</span>
         <span class="s2">&quot;It&#39;s really very, VERY runny, sir.&quot;</span><span class="p">,</span>
         <span class="n">shopkeeper</span><span class="o">=</span><span class="s2">&quot;Michael Palin&quot;</span><span class="p">,</span>
         <span class="n">client</span><span class="o">=</span><span class="s2">&quot;John Cleese&quot;</span><span class="p">,</span>
         <span class="n">sketch</span><span class="o">=</span><span class="s2">&quot;Cheese Shop Sketch&quot;</span><span class="p">)</span>
</pre></div>
</div>
<p>and of course it would print:</p>
<div class="highlight-none notranslate"><div class="highlight"><pre><span></span>-- Do you have any Limburger ?
-- I&#39;m sorry, we&#39;re all out of Limburger
It&#39;s very runny, sir.
It&#39;s really very, VERY runny, sir.
----------------------------------------
shopkeeper : Michael Palin
client : John Cleese
sketch : Cheese Shop Sketch
</pre></div>
</div>
<p>Note that the order in which the keyword arguments are printed is guaranteed
to match the order in which they were provided in the function call.</p>
</section>
<section id="special-parameters">
<h3><span class="section-number">4.8.3. </span>Special parameters<a class="headerlink" href="#special-parameters" title="Permalink to this headline">¶</a></h3>
<p>By default, arguments may be passed to a Python function either by position
or explicitly by keyword. For readability and performance, it makes sense to
restrict the way arguments can be passed so that a developer need only look
at the function definition to determine if items are passed by position, by
position or keyword, or by keyword.</p>
<p>A function definition may look like:</p>
<div class="highlight-none notranslate"><div class="highlight"><pre><span></span>def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):
    -----------    ----------     ----------
      |             |                  |
      |        Positional or keyword   |
      |                                - Keyword only
       -- Positional only
</pre></div>
</div>
<p>where <code class="docutils literal notranslate"><span class="pre">/</span></code> and <code class="docutils literal notranslate"><span class="pre">*</span></code> are optional. If used, these symbols indicate the kind of
parameter by how the arguments may be passed to the function:
positional-only, positional-or-keyword, and keyword-only. Keyword parameters
are also referred to as named parameters.</p>
<section id="positional-or-keyword-arguments">
<h4><span class="section-number">4.8.3.1. </span>Positional-or-Keyword Arguments<a class="headerlink" href="#positional-or-keyword-arguments" title="Permalink to this headline">¶</a></h4>
<p>If <code class="docutils literal notranslate"><span class="pre">/</span></code> and <code class="docutils literal notranslate"><span class="pre">*</span></code> are not present in the function definition, arguments may
be passed to a function by position or by keyword.</p>
</section>
<section id="positional-only-parameters">
<h4><span class="section-number">4.8.3.2. </span>Positional-Only Parameters<a class="headerlink" href="#positional-only-parameters" title="Permalink to this headline">¶</a></h4>
<p>Looking at this in a bit more detail, it is possible to mark certain parameters
as <em>positional-only</em>. If <em>positional-only</em>, the parameters’ order matters, and
the parameters cannot be passed by keyword. Positional-only parameters are
placed before a <code class="docutils literal notranslate"><span class="pre">/</span></code> (forward-slash). The <code class="docutils literal notranslate"><span class="pre">/</span></code> is used to logically
separate the positional-only parameters from the rest of the parameters.
If there is no <code class="docutils literal notranslate"><span class="pre">/</span></code> in the function definition, there are no positional-only
parameters.</p>
<p>Parameters following the <code class="docutils literal notranslate"><span class="pre">/</span></code> may be <em>positional-or-keyword</em> or <em>keyword-only</em>.</p>
</section>
<section id="keyword-only-arguments">
<h4><span class="section-number">4.8.3.3. </span>Keyword-Only Arguments<a class="headerlink" href="#keyword-only-arguments" title="Permalink to this headline">¶</a></h4>
<p>To mark parameters as <em>keyword-only</em>, indicating the parameters must be passed
by keyword argument, place an <code class="docutils literal notranslate"><span class="pre">*</span></code> in the arguments list just before the first
<em>keyword-only</em> parameter.</p>
</section>
<section id="function-examples">
<h4><span class="section-number">4.8.3.4. </span>Function Examples<a class="headerlink" href="#function-examples" title="Permalink to this headline">¶</a></h4>
<p>Consider the following example function definitions paying close attention to the
markers <code class="docutils literal notranslate"><span class="pre">/</span></code> and <code class="docutils literal notranslate"><span class="pre">*</span></code>:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">standard_arg</span><span class="p">(</span><span class="n">arg</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">arg</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">pos_only_arg</span><span class="p">(</span><span class="n">arg</span><span class="p">,</span> <span class="o">/</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">arg</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">kwd_only_arg</span><span class="p">(</span><span class="o">*</span><span class="p">,</span> <span class="n">arg</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">arg</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">combined_example</span><span class="p">(</span><span class="n">pos_only</span><span class="p">,</span> <span class="o">/</span><span class="p">,</span> <span class="n">standard</span><span class="p">,</span> <span class="o">*</span><span class="p">,</span> <span class="n">kwd_only</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">pos_only</span><span class="p">,</span> <span class="n">standard</span><span class="p">,</span> <span class="n">kwd_only</span><span class="p">)</span>
</pre></div>
</div>
<p>The first function definition, <code class="docutils literal notranslate"><span class="pre">standard_arg</span></code>, the most familiar form,
places no restrictions on the calling convention and arguments may be
passed by position or keyword:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">standard_arg</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="go">2</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">standard_arg</span><span class="p">(</span><span class="n">arg</span><span class="o">=</span><span class="mi">2</span><span class="p">)</span>
<span class="go">2</span>
</pre></div>
</div>
<p>The second function <code class="docutils literal notranslate"><span class="pre">pos_only_arg</span></code> is restricted to only use positional
parameters as there is a <code class="docutils literal notranslate"><span class="pre">/</span></code> in the function definition:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">pos_only_arg</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="go">1</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">pos_only_arg</span><span class="p">(</span><span class="n">arg</span><span class="o">=</span><span class="mi">1</span><span class="p">)</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">pos_only_arg() got some positional-only arguments passed as keyword arguments: &#39;arg&#39;</span>
</pre></div>
</div>
<p>The third function <code class="docutils literal notranslate"><span class="pre">kwd_only_args</span></code> only allows keyword arguments as indicated
by a <code class="docutils literal notranslate"><span class="pre">*</span></code> in the function definition:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">kwd_only_arg</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">kwd_only_arg() takes 0 positional arguments but 1 was given</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">kwd_only_arg</span><span class="p">(</span><span class="n">arg</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
<span class="go">3</span>
</pre></div>
</div>
<p>And the last uses all three calling conventions in the same function
definition:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">combined_example</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">combined_example() takes 2 positional arguments but 3 were given</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">combined_example</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="n">kwd_only</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
<span class="go">1 2 3</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">combined_example</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">standard</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">kwd_only</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
<span class="go">1 2 3</span>

<span class="gp">&gt;&gt;&gt; </span><span class="n">combined_example</span><span class="p">(</span><span class="n">pos_only</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">standard</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">kwd_only</span><span class="o">=</span><span class="mi">3</span><span class="p">)</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">combined_example() got some positional-only arguments passed as keyword arguments: &#39;pos_only&#39;</span>
</pre></div>
</div>
<p>Finally, consider this function definition which has a potential collision between the positional argument <code class="docutils literal notranslate"><span class="pre">name</span></code>  and <code class="docutils literal notranslate"><span class="pre">**kwds</span></code> which has <code class="docutils literal notranslate"><span class="pre">name</span></code> as a key:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">foo</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="o">**</span><span class="n">kwds</span><span class="p">):</span>
  <span class="k">return</span> <span class="s1">&#39;name&#39;</span> <span class="ow">in</span> <span class="n">kwds</span>
</pre></div>
</div>
<p>There is no possible call that will make it return <code class="docutils literal notranslate"><span class="pre">True</span></code> as the keyword <code class="docutils literal notranslate"><span class="pre">'name'</span></code>
will always bind to the first parameter. For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">foo</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="o">**</span><span class="p">{'{'}</span><span class="s1">&#39;name&#39;</span><span class="p">:</span> <span class="mi">2</span><span class="p">{'}'})</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">foo() got multiple values for argument &#39;name&#39;</span>
<span class="go">&gt;&gt;&gt;</span>
</pre></div>
</div>
<p>But using <code class="docutils literal notranslate"><span class="pre">/</span></code> (positional only arguments), it is possible since it allows <code class="docutils literal notranslate"><span class="pre">name</span></code> as a positional argument and <code class="docutils literal notranslate"><span class="pre">'name'</span></code> as a key in the keyword arguments:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">foo</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="o">/</span><span class="p">,</span> <span class="o">**</span><span class="n">kwds</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">return</span> <span class="s1">&#39;name&#39;</span> <span class="ow">in</span> <span class="n">kwds</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">foo</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="o">**</span><span class="p">{'{'}</span><span class="s1">&#39;name&#39;</span><span class="p">:</span> <span class="mi">2</span><span class="p">{'}'})</span>
<span class="go">True</span>
</pre></div>
</div>
<p>In other words, the names of positional-only parameters can be used in
<code class="docutils literal notranslate"><span class="pre">**kwds</span></code> without ambiguity.</p>
</section>
<section id="recap">
<h4><span class="section-number">4.8.3.5. </span>Recap<a class="headerlink" href="#recap" title="Permalink to this headline">¶</a></h4>
<p>The use case will determine which parameters to use in the function definition:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">pos1</span><span class="p">,</span> <span class="n">pos2</span><span class="p">,</span> <span class="o">/</span><span class="p">,</span> <span class="n">pos_or_kwd</span><span class="p">,</span> <span class="o">*</span><span class="p">,</span> <span class="n">kwd1</span><span class="p">,</span> <span class="n">kwd2</span><span class="p">):</span>
</pre></div>
</div>
<p>As guidance:</p>
<ul class="simple">
<li><p>Use positional-only if you want the name of the parameters to not be
available to the user. This is useful when parameter names have no real
meaning, if you want to enforce the order of the arguments when the function
is called or if you need to take some positional parameters and arbitrary
keywords.</p></li>
<li><p>Use keyword-only when names have meaning and the function definition is
more understandable by being explicit with names or you want to prevent
users relying on the position of the argument being passed.</p></li>
<li><p>For an API, use positional-only to prevent breaking API changes
if the parameter’s name is modified in the future.</p></li>
</ul>
</section>
</section>
<section id="arbitrary-argument-lists">
<span id="tut-arbitraryargs"></span><h3><span class="section-number">4.8.4. </span>Arbitrary Argument Lists<a class="headerlink" href="#arbitrary-argument-lists" title="Permalink to this headline">¶</a></h3>
<p id="index-3">Finally, the least frequently used option is to specify that a function can be
called with an arbitrary number of arguments.  These arguments will be wrapped
up in a tuple (see <a class="reference internal" href="datastructures.html#tut-tuples"><span class="std std-ref">Tuples and Sequences</span></a>).  Before the variable number of arguments,
zero or more normal arguments may occur.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="k">def</span> <span class="nf">write_multiple_items</span><span class="p">(</span><span class="n">file</span><span class="p">,</span> <span class="n">separator</span><span class="p">,</span> <span class="o">*</span><span class="n">args</span><span class="p">):</span>
  <span class="n">file</span><span class="o">.</span><span class="n">write</span><span class="p">(</span><span class="n">separator</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="n">args</span><span class="p">))</span>
</pre></div>
</div>
<p>Normally, these <em>variadic</em> arguments will be last in the list of formal
parameters, because they scoop up all remaining input arguments that are
passed to the function. Any formal parameters which occur after the <code class="docutils literal notranslate"><span class="pre">*args</span></code>
parameter are ‘keyword-only’ arguments, meaning that they can only be used as
keywords rather than positional arguments.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">concat</span><span class="p">(</span><span class="o">*</span><span class="n">args</span><span class="p">,</span> <span class="n">sep</span><span class="o">=</span><span class="s2">&quot;/&quot;</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">return</span> <span class="n">sep</span><span class="o">.</span><span class="n">join</span><span class="p">(</span><span class="n">args</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">concat</span><span class="p">(</span><span class="s2">&quot;earth&quot;</span><span class="p">,</span> <span class="s2">&quot;mars&quot;</span><span class="p">,</span> <span class="s2">&quot;venus&quot;</span><span class="p">)</span>
<span class="go">&#39;earth/mars/venus&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">concat</span><span class="p">(</span><span class="s2">&quot;earth&quot;</span><span class="p">,</span> <span class="s2">&quot;mars&quot;</span><span class="p">,</span> <span class="s2">&quot;venus&quot;</span><span class="p">,</span> <span class="n">sep</span><span class="o">=</span><span class="s2">&quot;.&quot;</span><span class="p">)</span>
<span class="go">&#39;earth.mars.venus&#39;</span>
</pre></div>
</div>
</section>
<section id="unpacking-argument-lists">
<span id="tut-unpacking-arguments"></span><h3><span class="section-number">4.8.5. </span>Unpacking Argument Lists<a class="headerlink" href="#unpacking-argument-lists" title="Permalink to this headline">¶</a></h3>
<p>The reverse situation occurs when the arguments are already in a list or tuple
but need to be unpacked for a function call requiring separate positional
arguments.  For instance, the built-in <a class="reference internal" href="../library/stdtypes.html#range" title="range"><code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code></a> function expects separate
<em>start</em> and <em>stop</em> arguments.  If they are not available separately, write the
function call with the  <code class="docutils literal notranslate"><span class="pre">*</span></code>-operator to unpack the arguments out of a list
or tuple:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>            <span class="c1"># normal call with separate arguments</span>
<span class="go">[3, 4, 5]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">args</span> <span class="o">=</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">6</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="o">*</span><span class="n">args</span><span class="p">))</span>            <span class="c1"># call with arguments unpacked from a list</span>
<span class="go">[3, 4, 5]</span>
</pre></div>
</div>
<p id="index-4">In the same fashion, dictionaries can deliver keyword arguments with the
<code class="docutils literal notranslate"><span class="pre">**</span></code>-operator:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">parrot</span><span class="p">(</span><span class="n">voltage</span><span class="p">,</span> <span class="n">state</span><span class="o">=</span><span class="s1">&#39;a stiff&#39;</span><span class="p">,</span> <span class="n">action</span><span class="o">=</span><span class="s1">&#39;voom&#39;</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;-- This parrot wouldn&#39;t&quot;</span><span class="p">,</span> <span class="n">action</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s1">&#39; &#39;</span><span class="p">)</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;if you put&quot;</span><span class="p">,</span> <span class="n">voltage</span><span class="p">,</span> <span class="s2">&quot;volts through it.&quot;</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s1">&#39; &#39;</span><span class="p">)</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;E&#39;s&quot;</span><span class="p">,</span> <span class="n">state</span><span class="p">,</span> <span class="s2">&quot;!&quot;</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">d</span> <span class="o">=</span> <span class="p">{'{'} </span><span class="s2">&quot;voltage&quot;</span><span class="p">:</span> <span class="s2">&quot;four million&quot;</span><span class="p">,</span> <span class="s2">&quot;state&quot;</span><span class="p">:</span> <span class="s2">&quot;bleedin&#39; demised&quot;</span><span class="p">,</span> <span class="s2">&quot;action&quot;</span><span class="p">:</span> <span class="s2">&quot;VOOM&quot;</span><span class="p"> {'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">parrot</span><span class="p">(</span><span class="o">**</span><span class="n">d</span><span class="p">)</span>
<span class="go">-- This parrot wouldn&#39;t VOOM if you put four million volts through it. E&#39;s bleedin&#39; demised !</span>
</pre></div>
</div>
</section>
<section id="lambda-expressions">
<span id="tut-lambda"></span><h3><span class="section-number">4.8.6. </span>Lambda Expressions<a class="headerlink" href="#lambda-expressions" title="Permalink to this headline">¶</a></h3>
<p>Small anonymous functions can be created with the <a class="reference internal" href="../reference/expressions.html#lambda"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">lambda</span></code></a> keyword.
This function returns the sum of its two arguments: <code class="docutils literal notranslate"><span class="pre">lambda</span> <span class="pre">a,</span> <span class="pre">b:</span> <span class="pre">a+b</span></code>.
Lambda functions can be used wherever function objects are required.  They are
syntactically restricted to a single expression.  Semantically, they are just
syntactic sugar for a normal function definition.  Like nested function
definitions, lambda functions can reference variables from the containing
scope:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">make_incrementor</span><span class="p">(</span><span class="n">n</span><span class="p">):</span>
<span class="gp">... </span>    <span class="k">return</span> <span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span> <span class="o">+</span> <span class="n">n</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span> <span class="o">=</span> <span class="n">make_incrementor</span><span class="p">(</span><span class="mi">42</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>
<span class="go">42</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="go">43</span>
</pre></div>
</div>
<p>The above example uses a lambda expression to return a function.  Another use
is to pass a small function as an argument:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">pairs</span> <span class="o">=</span> <span class="p">[(</span><span class="mi">1</span><span class="p">,</span> <span class="s1">&#39;one&#39;</span><span class="p">),</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="s1">&#39;two&#39;</span><span class="p">),</span> <span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="s1">&#39;three&#39;</span><span class="p">),</span> <span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="s1">&#39;four&#39;</span><span class="p">)]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">pairs</span><span class="o">.</span><span class="n">sort</span><span class="p">(</span><span class="n">key</span><span class="o">=</span><span class="k">lambda</span> <span class="n">pair</span><span class="p">:</span> <span class="n">pair</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">pairs</span>
<span class="go">[(4, &#39;four&#39;), (1, &#39;one&#39;), (3, &#39;three&#39;), (2, &#39;two&#39;)]</span>
</pre></div>
</div>
</section>
<section id="documentation-strings">
<span id="tut-docstrings"></span><h3><span class="section-number">4.8.7. </span>Documentation Strings<a class="headerlink" href="#documentation-strings" title="Permalink to this headline">¶</a></h3>
<p id="index-5">Here are some conventions about the content and formatting of documentation
strings.</p>
<p>The first line should always be a short, concise summary of the object’s
purpose.  For brevity, it should not explicitly state the object’s name or type,
since these are available by other means (except if the name happens to be a
verb describing a function’s operation).  This line should begin with a capital
letter and end with a period.</p>
<p>If there are more lines in the documentation string, the second line should be
blank, visually separating the summary from the rest of the description.  The
following lines should be one or more paragraphs describing the object’s calling
conventions, its side effects, etc.</p>
<p>The Python parser does not strip indentation from multi-line string literals in
Python, so tools that process documentation have to strip indentation if
desired.  This is done using the following convention. The first non-blank line
<em>after</em> the first line of the string determines the amount of indentation for
the entire documentation string.  (We can’t use the first line since it is
generally adjacent to the string’s opening quotes so its indentation is not
apparent in the string literal.)  Whitespace “equivalent” to this indentation is
then stripped from the start of all lines of the string.  Lines that are
indented less should not occur, but if they occur all their leading whitespace
should be stripped.  Equivalence of whitespace should be tested after expansion
of tabs (to 8 spaces, normally).</p>
<p>Here is an example of a multi-line docstring:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">my_function</span><span class="p">():</span>
<span class="gp">... </span>    <span class="sd">&quot;&quot;&quot;Do nothing, but document it.</span>
<span class="gp">...</span><span class="sd"></span>
<span class="gp">... </span><span class="sd">    No, really, it doesn&#39;t do anything.</span>
<span class="gp">... </span><span class="sd">    &quot;&quot;&quot;</span>
<span class="gp">... </span>    <span class="k">pass</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="n">my_function</span><span class="o">.</span><span class="vm">__doc__</span><span class="p">)</span>
<span class="go">Do nothing, but document it.</span>

<span class="go">    No, really, it doesn&#39;t do anything.</span>
</pre></div>
</div>
</section>
<section id="function-annotations">
<span id="tut-annotations"></span><h3><span class="section-number">4.8.8. </span>Function Annotations<a class="headerlink" href="#function-annotations" title="Permalink to this headline">¶</a></h3>
<p id="index-6"><a class="reference internal" href="../reference/compound_stmts.html#function"><span class="std std-ref">Function annotations</span></a> are completely optional metadata
information about the types used by user-defined functions (see <span class="target" id="index-7"></span><a class="pep reference external" href="https://peps.python.org/pep-3107/"><strong>PEP 3107</strong></a> and
<span class="target" id="index-8"></span><a class="pep reference external" href="https://peps.python.org/pep-0484/"><strong>PEP 484</strong></a> for more information).</p>
<p><a class="reference internal" href="../glossary.html#term-function-annotation"><span class="xref std std-term">Annotations</span></a> are stored in the <code class="xref py py-attr docutils literal notranslate"><span class="pre">__annotations__</span></code>
attribute of the function as a dictionary and have no effect on any other part of the
function.  Parameter annotations are defined by a colon after the parameter name, followed
by an expression evaluating to the value of the annotation.  Return annotations are
defined by a literal <code class="docutils literal notranslate"><span class="pre">-&gt;</span></code>, followed by an expression, between the parameter
list and the colon denoting the end of the <a class="reference internal" href="../reference/compound_stmts.html#def"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">def</span></code></a> statement.  The
following example has a required argument, an optional argument, and the return
value annotated:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">def</span> <span class="nf">f</span><span class="p">(</span><span class="n">ham</span><span class="p">:</span> <span class="nb">str</span><span class="p">,</span> <span class="n">eggs</span><span class="p">:</span> <span class="nb">str</span> <span class="o">=</span> <span class="s1">&#39;eggs&#39;</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">str</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Annotations:&quot;</span><span class="p">,</span> <span class="n">f</span><span class="o">.</span><span class="vm">__annotations__</span><span class="p">)</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Arguments:&quot;</span><span class="p">,</span> <span class="n">ham</span><span class="p">,</span> <span class="n">eggs</span><span class="p">)</span>
<span class="gp">... </span>    <span class="k">return</span> <span class="n">ham</span> <span class="o">+</span> <span class="s1">&#39; and &#39;</span> <span class="o">+</span> <span class="n">eggs</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">f</span><span class="p">(</span><span class="s1">&#39;spam&#39;</span><span class="p">)</span>
<span class="go">Annotations: {'{'} &#39;ham&#39;: &lt;class &#39;str&#39;&gt;, &#39;return&#39;: &lt;class &#39;str&#39;&gt;, &#39;eggs&#39;: &lt;class &#39;str&#39;&gt;{'}'}</span>
<span class="go">Arguments: spam eggs</span>
<span class="go">&#39;spam and eggs&#39;</span>
</pre></div>
</div>
</section>
</section>
<section id="intermezzo-coding-style">
<span id="tut-codingstyle"></span><h2><span class="section-number">4.9. </span>Intermezzo: Coding Style<a class="headerlink" href="#intermezzo-coding-style" title="Permalink to this headline">¶</a></h2>
<p id="index-9">Now that you are about to write longer, more complex pieces of Python, it is a
good time to talk about <em>coding style</em>.  Most languages can be written (or more
concise, <em>formatted</em>) in different styles; some are more readable than others.
Making it easy for others to read your code is always a good idea, and adopting
a nice coding style helps tremendously for that.</p>
<p>For Python, <span class="target" id="index-10"></span><a class="pep reference external" href="https://peps.python.org/pep-0008/"><strong>PEP 8</strong></a> has emerged as the style guide that most projects adhere to;
it promotes a very readable and eye-pleasing coding style.  Every Python
developer should read it at some point; here are the most important points
extracted for you:</p>
<ul>
<li><p>Use 4-space indentation, and no tabs.</p>
<p>4 spaces are a good compromise between small indentation (allows greater
nesting depth) and large indentation (easier to read).  Tabs introduce
confusion, and are best left out.</p>
</li>
<li><p>Wrap lines so that they don’t exceed 79 characters.</p>
<p>This helps users with small displays and makes it possible to have several
code files side-by-side on larger displays.</p>
</li>
<li><p>Use blank lines to separate functions and classes, and larger blocks of
code inside functions.</p></li>
<li><p>When possible, put comments on a line of their own.</p></li>
<li><p>Use docstrings.</p></li>
<li><p>Use spaces around operators and after commas, but not directly inside
bracketing constructs: <code class="docutils literal notranslate"><span class="pre">a</span> <span class="pre">=</span> <span class="pre">f(1,</span> <span class="pre">2)</span> <span class="pre">+</span> <span class="pre">g(3,</span> <span class="pre">4)</span></code>.</p></li>
<li><p>Name your classes and functions consistently; the convention is to use
<code class="docutils literal notranslate"><span class="pre">UpperCamelCase</span></code> for classes and <code class="docutils literal notranslate"><span class="pre">lowercase_with_underscores</span></code> for functions
and methods.  Always use <code class="docutils literal notranslate"><span class="pre">self</span></code> as the name for the first method argument
(see <a class="reference internal" href="classes.html#tut-firstclasses"><span class="std std-ref">A First Look at Classes</span></a> for more on classes and methods).</p></li>
<li><p>Don’t use fancy encodings if your code is meant to be used in international
environments.  Python’s default, UTF-8, or even plain ASCII work best in any
case.</p></li>
<li><p>Likewise, don’t use non-ASCII characters in identifiers if there is only the
slightest chance people speaking a different language will read or maintain
the code.</p></li>
</ul>
<p class="rubric">Footnotes</p>
<dl class="footnote brackets">
<dt class="label" id="id2"><span class="brackets"><a class="fn-backref" href="#id1">1</a></span></dt>
<dd><p>Actually, <em>call by object reference</em> would be a better description,
since if a mutable object is passed, the caller will see any changes the
callee makes to it (items inserted into a list).</p>
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
<li><a class="reference internal" href="#">4. More Control Flow Tools</a><ul>
<li><a class="reference internal" href="#if-statements">4.1. <code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code> Statements</a></li>
<li><a class="reference internal" href="#for-statements">4.2. <code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> Statements</a></li>
<li><a class="reference internal" href="#the-range-function">4.3. The <code class="xref py py-func docutils literal notranslate"><span class="pre">range()</span></code> Function</a></li>
<li><a class="reference internal" href="#break-and-continue-statements-and-else-clauses-on-loops">4.4. <code class="xref std std-keyword docutils literal notranslate"><span class="pre">break</span></code> and <code class="xref std std-keyword docutils literal notranslate"><span class="pre">continue</span></code> Statements, and <code class="xref std std-keyword docutils literal notranslate"><span class="pre">else</span></code> Clauses on Loops</a></li>
<li><a class="reference internal" href="#pass-statements">4.5. <code class="xref std std-keyword docutils literal notranslate"><span class="pre">pass</span></code> Statements</a></li>
<li><a class="reference internal" href="#match-statements">4.6. <code class="xref std std-keyword docutils literal notranslate"><span class="pre">match</span></code> Statements</a></li>
<li><a class="reference internal" href="#defining-functions">4.7. Defining Functions</a></li>
<li><a class="reference internal" href="#more-on-defining-functions">4.8. More on Defining Functions</a><ul>
<li><a class="reference internal" href="#default-argument-values">4.8.1. Default Argument Values</a></li>
<li><a class="reference internal" href="#keyword-arguments">4.8.2. Keyword Arguments</a></li>
<li><a class="reference internal" href="#special-parameters">4.8.3. Special parameters</a><ul>
<li><a class="reference internal" href="#positional-or-keyword-arguments">4.8.3.1. Positional-or-Keyword Arguments</a></li>
<li><a class="reference internal" href="#positional-only-parameters">4.8.3.2. Positional-Only Parameters</a></li>
<li><a class="reference internal" href="#keyword-only-arguments">4.8.3.3. Keyword-Only Arguments</a></li>
<li><a class="reference internal" href="#function-examples">4.8.3.4. Function Examples</a></li>
<li><a class="reference internal" href="#recap">4.8.3.5. Recap</a></li>
</ul>
</li>
<li><a class="reference internal" href="#arbitrary-argument-lists">4.8.4. Arbitrary Argument Lists</a></li>
<li><a class="reference internal" href="#unpacking-argument-lists">4.8.5. Unpacking Argument Lists</a></li>
<li><a class="reference internal" href="#lambda-expressions">4.8.6. Lambda Expressions</a></li>
<li><a class="reference internal" href="#documentation-strings">4.8.7. Documentation Strings</a></li>
<li><a class="reference internal" href="#function-annotations">4.8.8. Function Annotations</a></li>
</ul>
</li>
<li><a class="reference internal" href="#intermezzo-coding-style">4.9. Intermezzo: Coding Style</a></li>
</ul>
</li>
</ul>

</div>
<div role="note" aria-label="source link">
  <h3>This Page</h3>
  <ul class="this-page-menu">
    <li>
      <a href="https://github.com/python/cpython/blob/3.11/Doc/tutorial/controlflow.rst"
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

export default ControlTools
