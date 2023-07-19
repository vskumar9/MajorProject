import React from 'react'

const Structures = () => {
  return (
    <div class="document">
    <div class="documentwrapper">
      <div class="bodywrapper">
        <div class="body" role="main">
          
<section id="data-structures">
<span id="tut-structures"></span><h1><span class="section-number">5. </span>Data Structures<a class="headerlink" href="#data-structures" title="Permalink to this headline">¶</a></h1>
<p>This chapter describes some things you’ve learned about already in more detail,
and adds some new things as well.</p>
<section id="more-on-lists">
<span id="tut-morelists"></span><h2><span class="section-number">5.1. </span>More on Lists<a class="headerlink" href="#more-on-lists" title="Permalink to this headline">¶</a></h2>
<p>The list data type has some more methods.  Here are all of the methods of list
objects:</p>
<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">append</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">x</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Add an item to the end of the list.  Equivalent to <code class="docutils literal notranslate"><span class="pre">a[len(a):]</span> <span class="pre">=</span> <span class="pre">[x]</span></code>.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">extend</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">iterable</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Extend the list by appending all the items from the iterable.  Equivalent to
<code class="docutils literal notranslate"><span class="pre">a[len(a):]</span> <span class="pre">=</span> <span class="pre">iterable</span></code>.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">insert</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">i</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">x</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Insert an item at a given position.  The first argument is the index of the
element before which to insert, so <code class="docutils literal notranslate"><span class="pre">a.insert(0,</span> <span class="pre">x)</span></code> inserts at the front of
the list, and <code class="docutils literal notranslate"><span class="pre">a.insert(len(a),</span> <span class="pre">x)</span></code> is equivalent to <code class="docutils literal notranslate"><span class="pre">a.append(x)</span></code>.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">remove</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">x</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Remove the first item from the list whose value is equal to <em>x</em>.  It raises a
<a class="reference internal" href="../library/exceptions.html#ValueError" title="ValueError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">ValueError</span></code></a> if there is no such item.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">pop</span></span><span class="sig-paren">(</span><span class="optional">[</span><em class="sig-param"><span class="n"><span class="pre">i</span></span></em><span class="optional">]</span><span class="sig-paren">)</span></dt>
<dd><p>Remove the item at the given position in the list, and return it.  If no index
is specified, <code class="docutils literal notranslate"><span class="pre">a.pop()</span></code> removes and returns the last item in the list.  (The
square brackets around the <em>i</em> in the method signature denote that the parameter
is optional, not that you should type square brackets at that position.  You
will see this notation frequently in the Python Library Reference.)</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">clear</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span></dt>
<dd><p>Remove all items from the list.  Equivalent to <code class="docutils literal notranslate"><span class="pre">del</span> <span class="pre">a[:]</span></code>.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">index</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">x</span></span></em><span class="optional">[</span>, <em class="sig-param"><span class="n"><span class="pre">start</span></span></em><span class="optional">[</span>, <em class="sig-param"><span class="n"><span class="pre">end</span></span></em><span class="optional">]</span><span class="optional">]</span><span class="sig-paren">)</span></dt>
<dd><p>Return zero-based index in the list of the first item whose value is equal to <em>x</em>.
Raises a <a class="reference internal" href="../library/exceptions.html#ValueError" title="ValueError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">ValueError</span></code></a> if there is no such item.</p>
<p>The optional arguments <em>start</em> and <em>end</em> are interpreted as in the slice
notation and are used to limit the search to a particular subsequence of
the list.  The returned index is computed relative to the beginning of the full
sequence rather than the <em>start</em> argument.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">count</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">x</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Return the number of times <em>x</em> appears in the list.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">sort</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">key</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">reverse</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">False</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Sort the items of the list in place (the arguments can be used for sort
customization, see <a class="reference internal" href="../library/functions.html#sorted" title="sorted"><code class="xref py py-func docutils literal notranslate"><span class="pre">sorted()</span></code></a> for their explanation).</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">reverse</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span></dt>
<dd><p>Reverse the elements of the list in place.</p>
</dd></dl>

<dl class="py method">
<dt class="sig sig-object py">
<span class="sig-prename descclassname"><span class="pre">list.</span></span><span class="sig-name descname"><span class="pre">copy</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span></dt>
<dd><p>Return a shallow copy of the list.  Equivalent to <code class="docutils literal notranslate"><span class="pre">a[:]</span></code>.</p>
</dd></dl>

<p>An example that uses most of the list methods:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;pear&#39;</span><span class="p">,</span> <span class="s1">&#39;banana&#39;</span><span class="p">,</span> <span class="s1">&#39;kiwi&#39;</span><span class="p">,</span> <span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;banana&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">count</span><span class="p">(</span><span class="s1">&#39;apple&#39;</span><span class="p">)</span>
<span class="go">2</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">count</span><span class="p">(</span><span class="s1">&#39;tangerine&#39;</span><span class="p">)</span>
<span class="go">0</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">index</span><span class="p">(</span><span class="s1">&#39;banana&#39;</span><span class="p">)</span>
<span class="go">3</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">index</span><span class="p">(</span><span class="s1">&#39;banana&#39;</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span>  <span class="c1"># Find next banana starting at position 4</span>
<span class="go">6</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">reverse</span><span class="p">()</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span>
<span class="go">[&#39;banana&#39;, &#39;apple&#39;, &#39;kiwi&#39;, &#39;banana&#39;, &#39;pear&#39;, &#39;apple&#39;, &#39;orange&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="s1">&#39;grape&#39;</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span>
<span class="go">[&#39;banana&#39;, &#39;apple&#39;, &#39;kiwi&#39;, &#39;banana&#39;, &#39;pear&#39;, &#39;apple&#39;, &#39;orange&#39;, &#39;grape&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">sort</span><span class="p">()</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span>
<span class="go">[&#39;apple&#39;, &#39;apple&#39;, &#39;banana&#39;, &#39;banana&#39;, &#39;grape&#39;, &#39;kiwi&#39;, &#39;orange&#39;, &#39;pear&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">fruits</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="go">&#39;pear&#39;</span>
</pre></div>
</div>
<p>You might have noticed that methods like <code class="docutils literal notranslate"><span class="pre">insert</span></code>, <code class="docutils literal notranslate"><span class="pre">remove</span></code> or <code class="docutils literal notranslate"><span class="pre">sort</span></code> that
only modify the list have no return value printed – they return the default
<code class="docutils literal notranslate"><span class="pre">None</span></code>. <a class="footnote-reference brackets" href="#id2" id="id1">1</a>  This is a design principle for all mutable data structures in
Python.</p>
<p>Another thing you might notice is that not all data can be sorted or
compared.  For instance, <code class="docutils literal notranslate"><span class="pre">[None,</span> <span class="pre">'hello',</span> <span class="pre">10]</span></code> doesn’t sort because
integers can’t be compared to strings and <em>None</em> can’t be compared to
other types.  Also, there are some types that don’t have a defined
ordering relation.  For example, <code class="docutils literal notranslate"><span class="pre">3+4j</span> <span class="pre">&lt;</span> <span class="pre">5+7j</span></code> isn’t a valid
comparison.</p>
<section id="using-lists-as-stacks">
<span id="tut-lists-as-stacks"></span><h3><span class="section-number">5.1.1. </span>Using Lists as Stacks<a class="headerlink" href="#using-lists-as-stacks" title="Permalink to this headline">¶</a></h3>
<p>The list methods make it very easy to use a list as a stack, where the last
element added is the first element retrieved (“last-in, first-out”).  To add an
item to the top of the stack, use <code class="xref py py-meth docutils literal notranslate"><span class="pre">append()</span></code>.  To retrieve an item from the
top of the stack, use <code class="xref py py-meth docutils literal notranslate"><span class="pre">pop()</span></code> without an explicit index.  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span> <span class="o">=</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="mi">6</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="mi">7</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span>
<span class="go">[3, 4, 5, 6, 7]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="go">7</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span>
<span class="go">[3, 4, 5, 6]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="go">6</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span><span class="o">.</span><span class="n">pop</span><span class="p">()</span>
<span class="go">5</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">stack</span>
<span class="go">[3, 4]</span>
</pre></div>
</div>
</section>
<section id="using-lists-as-queues">
<span id="tut-lists-as-queues"></span><h3><span class="section-number">5.1.2. </span>Using Lists as Queues<a class="headerlink" href="#using-lists-as-queues" title="Permalink to this headline">¶</a></h3>
<p>It is also possible to use a list as a queue, where the first element added is
the first element retrieved (“first-in, first-out”); however, lists are not
efficient for this purpose.  While appends and pops from the end of list are
fast, doing inserts or pops from the beginning of a list is slow (because all
of the other elements have to be shifted by one).</p>
<p>To implement a queue, use <a class="reference internal" href="../library/collections.html#collections.deque" title="collections.deque"><code class="xref py py-class docutils literal notranslate"><span class="pre">collections.deque</span></code></a> which was designed to
have fast appends and pops from both ends.  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="kn">from</span> <span class="nn">collections</span> <span class="kn">import</span> <span class="n">deque</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span> <span class="o">=</span> <span class="n">deque</span><span class="p">([</span><span class="s2">&quot;Eric&quot;</span><span class="p">,</span> <span class="s2">&quot;John&quot;</span><span class="p">,</span> <span class="s2">&quot;Michael&quot;</span><span class="p">])</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="s2">&quot;Terry&quot;</span><span class="p">)</span>           <span class="c1"># Terry arrives</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="s2">&quot;Graham&quot;</span><span class="p">)</span>          <span class="c1"># Graham arrives</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span><span class="o">.</span><span class="n">popleft</span><span class="p">()</span>                 <span class="c1"># The first to arrive now leaves</span>
<span class="go">&#39;Eric&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span><span class="o">.</span><span class="n">popleft</span><span class="p">()</span>                 <span class="c1"># The second to arrive now leaves</span>
<span class="go">&#39;John&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">queue</span>                           <span class="c1"># Remaining queue in order of arrival</span>
<span class="go">deque([&#39;Michael&#39;, &#39;Terry&#39;, &#39;Graham&#39;])</span>
</pre></div>
</div>
</section>
<section id="list-comprehensions">
<span id="tut-listcomps"></span><h3><span class="section-number">5.1.3. </span>List Comprehensions<a class="headerlink" href="#list-comprehensions" title="Permalink to this headline">¶</a></h3>
<p>List comprehensions provide a concise way to create lists.
Common applications are to make new lists where each element is the result of
some operations applied to each member of another sequence or iterable, or to
create a subsequence of those elements that satisfy a certain condition.</p>
<p>For example, assume we want to create a list of squares, like:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">):</span>
<span class="gp">... </span>    <span class="n">squares</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">squares</span>
<span class="go">[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span>
</pre></div>
</div>
<p>Note that this creates (or overwrites) a variable named <code class="docutils literal notranslate"><span class="pre">x</span></code> that still exists
after the loop completes.  We can calculate the list of squares without any
side effects using:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">squares</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="nb">map</span><span class="p">(</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="p">,</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">)))</span>
</pre></div>
</div>
<p>or, equivalently:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="n">squares</span> <span class="o">=</span> <span class="p">[</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">10</span><span class="p">)]</span>
</pre></div>
</div>
<p>which is more concise and readable.</p>
<p>A list comprehension consists of brackets containing an expression followed
by a <code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> clause, then zero or more <code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> or <code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code>
clauses.  The result will be a new list resulting from evaluating the expression
in the context of the <code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code> and <code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code> clauses which follow it.
For example, this listcomp combines the elements of two lists if they are not
equal:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="p">[(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">]</span> <span class="k">for</span> <span class="n">y</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">4</span><span class="p">]</span> <span class="k">if</span> <span class="n">x</span> <span class="o">!=</span> <span class="n">y</span><span class="p">]</span>
<span class="go">[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]</span>
</pre></div>
</div>
<p>and it’s equivalent to:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">combs</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">]:</span>
<span class="gp">... </span>    <span class="k">for</span> <span class="n">y</span> <span class="ow">in</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span><span class="mi">1</span><span class="p">,</span><span class="mi">4</span><span class="p">]:</span>
<span class="gp">... </span>        <span class="k">if</span> <span class="n">x</span> <span class="o">!=</span> <span class="n">y</span><span class="p">:</span>
<span class="gp">... </span>            <span class="n">combs</span><span class="o">.</span><span class="n">append</span><span class="p">((</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">))</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">combs</span>
<span class="go">[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]</span>
</pre></div>
</div>
<p>Note how the order of the <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> and <a class="reference internal" href="../reference/compound_stmts.html#if"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code></a> statements is the
same in both these snippets.</p>
<p>If the expression is a tuple (e.g. the <code class="docutils literal notranslate"><span class="pre">(x,</span> <span class="pre">y)</span></code> in the previous example),
it must be parenthesized.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">vec</span> <span class="o">=</span> <span class="p">[</span><span class="o">-</span><span class="mi">4</span><span class="p">,</span> <span class="o">-</span><span class="mi">2</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># create a new list with the values doubled</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="n">x</span><span class="o">*</span><span class="mi">2</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">vec</span><span class="p">]</span>
<span class="go">[-8, -4, 0, 4, 8]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># filter the list to exclude negative numbers</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="n">x</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">vec</span> <span class="k">if</span> <span class="n">x</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">]</span>
<span class="go">[0, 2, 4]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># apply a function to all the elements</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="nb">abs</span><span class="p">(</span><span class="n">x</span><span class="p">)</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">vec</span><span class="p">]</span>
<span class="go">[4, 2, 0, 2, 4]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># call a method on each element</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">freshfruit</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;  banana&#39;</span><span class="p">,</span> <span class="s1">&#39;  loganberry &#39;</span><span class="p">,</span> <span class="s1">&#39;passion fruit  &#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="n">weapon</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span> <span class="k">for</span> <span class="n">weapon</span> <span class="ow">in</span> <span class="n">freshfruit</span><span class="p">]</span>
<span class="go">[&#39;banana&#39;, &#39;loganberry&#39;, &#39;passion fruit&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># create a list of 2-tuples like (number, square)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[(</span><span class="n">x</span><span class="p">,</span> <span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">6</span><span class="p">)]</span>
<span class="go">[(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># the tuple must be parenthesized, otherwise an error is raised</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="n">x</span><span class="p">,</span> <span class="n">x</span><span class="o">**</span><span class="mi">2</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">6</span><span class="p">)]</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>
  <span class="p">[</span><span class="n">x</span><span class="p">,</span> <span class="n">x</span><span class="o">**</span><span class="mi">2</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">6</span><span class="p">)]</span>
   <span class="pm">^^^^^^^</span>
<span class="gr">SyntaxError</span>: <span class="n">did you forget parentheses around the comprehension target?</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># flatten a list using a listcomp with two &#39;for&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">vec</span> <span class="o">=</span> <span class="p">[[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">],</span> <span class="p">[</span><span class="mi">4</span><span class="p">,</span><span class="mi">5</span><span class="p">,</span><span class="mi">6</span><span class="p">],</span> <span class="p">[</span><span class="mi">7</span><span class="p">,</span><span class="mi">8</span><span class="p">,</span><span class="mi">9</span><span class="p">]]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="n">num</span> <span class="k">for</span> <span class="n">elem</span> <span class="ow">in</span> <span class="n">vec</span> <span class="k">for</span> <span class="n">num</span> <span class="ow">in</span> <span class="n">elem</span><span class="p">]</span>
<span class="go">[1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
</pre></div>
</div>
<p>List comprehensions can contain complex expressions and nested functions:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="kn">from</span> <span class="nn">math</span> <span class="kn">import</span> <span class="n">pi</span>
<span class="gp">&gt;&gt;&gt; </span><span class="p">[</span><span class="nb">str</span><span class="p">(</span><span class="nb">round</span><span class="p">(</span><span class="n">pi</span><span class="p">,</span> <span class="n">i</span><span class="p">))</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">6</span><span class="p">)]</span>
<span class="go">[&#39;3.1&#39;, &#39;3.14&#39;, &#39;3.142&#39;, &#39;3.1416&#39;, &#39;3.14159&#39;]</span>
</pre></div>
</div>
</section>
<section id="nested-list-comprehensions">
<h3><span class="section-number">5.1.4. </span>Nested List Comprehensions<a class="headerlink" href="#nested-list-comprehensions" title="Permalink to this headline">¶</a></h3>
<p>The initial expression in a list comprehension can be any arbitrary expression,
including another list comprehension.</p>
<p>Consider the following example of a 3x4 matrix implemented as a list of
3 lists of length 4:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">matrix</span> <span class="o">=</span> <span class="p">[</span>
<span class="gp">... </span>    <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">],</span>
<span class="gp">... </span>    <span class="p">[</span><span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">7</span><span class="p">,</span> <span class="mi">8</span><span class="p">],</span>
<span class="gp">... </span>    <span class="p">[</span><span class="mi">9</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">12</span><span class="p">],</span>
<span class="gp">... </span><span class="p">]</span>
</pre></div>
</div>
<p>The following list comprehension will transpose rows and columns:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="p">[[</span><span class="n">row</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">row</span> <span class="ow">in</span> <span class="n">matrix</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">)]</span>
<span class="go">[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]</span>
</pre></div>
</div>
<p>As we saw in the previous section, the inner list comprehension is evaluated in
the context of the <a class="reference internal" href="../reference/compound_stmts.html#for"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">for</span></code></a> that follows it, so this example is
equivalent to:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">transposed</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">):</span>
<span class="gp">... </span>    <span class="n">transposed</span><span class="o">.</span><span class="n">append</span><span class="p">([</span><span class="n">row</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> <span class="k">for</span> <span class="n">row</span> <span class="ow">in</span> <span class="n">matrix</span><span class="p">])</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">transposed</span>
<span class="go">[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]</span>
</pre></div>
</div>
<p>which, in turn, is the same as:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">transposed</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">4</span><span class="p">):</span>
<span class="gp">... </span>    <span class="c1"># the following 3 lines implement the nested listcomp</span>
<span class="gp">... </span>    <span class="n">transposed_row</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">... </span>    <span class="k">for</span> <span class="n">row</span> <span class="ow">in</span> <span class="n">matrix</span><span class="p">:</span>
<span class="gp">... </span>        <span class="n">transposed_row</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">row</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
<span class="gp">... </span>    <span class="n">transposed</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">transposed_row</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">transposed</span>
<span class="go">[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]</span>
</pre></div>
</div>
<p>In the real world, you should prefer built-in functions to complex flow statements.
The <a class="reference internal" href="../library/functions.html#zip" title="zip"><code class="xref py py-func docutils literal notranslate"><span class="pre">zip()</span></code></a> function would do a great job for this use case:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="nb">zip</span><span class="p">(</span><span class="o">*</span><span class="n">matrix</span><span class="p">))</span>
<span class="go">[(1, 5, 9), (2, 6, 10), (3, 7, 11), (4, 8, 12)]</span>
</pre></div>
</div>
<p>See <a class="reference internal" href="controlflow.html#tut-unpacking-arguments"><span class="std std-ref">Unpacking Argument Lists</span></a> for details on the asterisk in this line.</p>
</section>
</section>
<section id="the-del-statement">
<span id="tut-del"></span><h2><span class="section-number">5.2. </span>The <code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code> statement<a class="headerlink" href="#the-del-statement" title="Permalink to this headline">¶</a></h2>
<p>There is a way to remove an item from a list given its index instead of its
value: the <a class="reference internal" href="../reference/simple_stmts.html#del"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code></a> statement.  This differs from the <code class="xref py py-meth docutils literal notranslate"><span class="pre">pop()</span></code> method
which returns a value.  The <code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code> statement can also be used to remove
slices from a list or clear the entire list (which we did earlier by assignment
of an empty list to the slice).  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mf">66.25</span><span class="p">,</span> <span class="mi">333</span><span class="p">,</span> <span class="mi">333</span><span class="p">,</span> <span class="mf">1234.5</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">del</span> <span class="n">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span>
<span class="go">[1, 66.25, 333, 333, 1234.5]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">del</span> <span class="n">a</span><span class="p">[</span><span class="mi">2</span><span class="p">:</span><span class="mi">4</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span>
<span class="go">[1, 66.25, 1234.5]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">del</span> <span class="n">a</span><span class="p">[:]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span>
<span class="go">[]</span>
</pre></div>
</div>
<p><a class="reference internal" href="../reference/simple_stmts.html#del"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code></a> can also be used to delete entire variables:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">del</span> <span class="n">a</span>
</pre></div>
</div>
<p>Referencing the name <code class="docutils literal notranslate"><span class="pre">a</span></code> hereafter is an error (at least until another value
is assigned to it).  We’ll find other uses for <a class="reference internal" href="../reference/simple_stmts.html#del"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code></a> later.</p>
</section>
<section id="tuples-and-sequences">
<span id="tut-tuples"></span><h2><span class="section-number">5.3. </span>Tuples and Sequences<a class="headerlink" href="#tuples-and-sequences" title="Permalink to this headline">¶</a></h2>
<p>We saw that lists and strings have many common properties, such as indexing and
slicing operations.  They are two examples of <em>sequence</em> data types (see
<a class="reference internal" href="../library/stdtypes.html#typesseq"><span class="std std-ref">Sequence Types — list, tuple, range</span></a>).  Since Python is an evolving language, other sequence data
types may be added.  There is also another standard sequence data type: the
<em>tuple</em>.</p>
<p>A tuple consists of a number of values separated by commas, for instance:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">t</span> <span class="o">=</span> <span class="mi">12345</span><span class="p">,</span> <span class="mi">54321</span><span class="p">,</span> <span class="s1">&#39;hello!&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">t</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
<span class="go">12345</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">t</span>
<span class="go">(12345, 54321, &#39;hello!&#39;)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># Tuples may be nested:</span>
<span class="gp">... </span><span class="n">u</span> <span class="o">=</span> <span class="n">t</span><span class="p">,</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">u</span>
<span class="go">((12345, 54321, &#39;hello!&#39;), (1, 2, 3, 4, 5))</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># Tuples are immutable:</span>
<span class="gp">... </span><span class="n">t</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="mi">88888</span>
<span class="gt">Traceback (most recent call last):</span>
File <span class="nb">&quot;&lt;stdin&gt;&quot;</span>, line <span class="m">1</span>, in <span class="n">&lt;module&gt;</span>
<span class="gr">TypeError</span>: <span class="n">&#39;tuple&#39; object does not support item assignment</span>
<span class="gp">&gt;&gt;&gt; </span><span class="c1"># but they can contain mutable objects:</span>
<span class="gp">... </span><span class="n">v</span> <span class="o">=</span> <span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">],</span> <span class="p">[</span><span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">])</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">v</span>
<span class="go">([1, 2, 3], [3, 2, 1])</span>
</pre></div>
</div>
<p>As you see, on output tuples are always enclosed in parentheses, so that nested
tuples are interpreted correctly; they may be input with or without surrounding
parentheses, although often parentheses are necessary anyway (if the tuple is
part of a larger expression).  It is not possible to assign to the individual
items of a tuple, however it is possible to create tuples which contain mutable
objects, such as lists.</p>
<p>Though tuples may seem similar to lists, they are often used in different
situations and for different purposes.
Tuples are <a class="reference internal" href="../glossary.html#term-immutable"><span class="xref std std-term">immutable</span></a>, and usually contain a heterogeneous sequence of
elements that are accessed via unpacking (see later in this section) or indexing
(or even by attribute in the case of <a class="reference internal" href="../library/collections.html#collections.namedtuple" title="collections.namedtuple"><code class="xref py py-func docutils literal notranslate"><span class="pre">namedtuples</span></code></a>).
Lists are <a class="reference internal" href="../glossary.html#term-mutable"><span class="xref std std-term">mutable</span></a>, and their elements are usually homogeneous and are
accessed by iterating over the list.</p>
<p>A special problem is the construction of tuples containing 0 or 1 items: the
syntax has some extra quirks to accommodate these.  Empty tuples are constructed
by an empty pair of parentheses; a tuple with one item is constructed by
following a value with a comma (it is not sufficient to enclose a single value
in parentheses). Ugly, but effective.  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">empty</span> <span class="o">=</span> <span class="p">()</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">singleton</span> <span class="o">=</span> <span class="s1">&#39;hello&#39;</span><span class="p">,</span>    <span class="c1"># &lt;-- note trailing comma</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">len</span><span class="p">(</span><span class="n">empty</span><span class="p">)</span>
<span class="go">0</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">len</span><span class="p">(</span><span class="n">singleton</span><span class="p">)</span>
<span class="go">1</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">singleton</span>
<span class="go">(&#39;hello&#39;,)</span>
</pre></div>
</div>
<p>The statement <code class="docutils literal notranslate"><span class="pre">t</span> <span class="pre">=</span> <span class="pre">12345,</span> <span class="pre">54321,</span> <span class="pre">'hello!'</span></code> is an example of <em>tuple packing</em>:
the values <code class="docutils literal notranslate"><span class="pre">12345</span></code>, <code class="docutils literal notranslate"><span class="pre">54321</span></code> and <code class="docutils literal notranslate"><span class="pre">'hello!'</span></code> are packed together in a tuple.
The reverse operation is also possible:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">,</span> <span class="n">z</span> <span class="o">=</span> <span class="n">t</span>
</pre></div>
</div>
<p>This is called, appropriately enough, <em>sequence unpacking</em> and works for any
sequence on the right-hand side.  Sequence unpacking requires that there are as
many variables on the left side of the equals sign as there are elements in the
sequence.  Note that multiple assignment is really just a combination of tuple
packing and sequence unpacking.</p>
</section>
<section id="sets">
<span id="tut-sets"></span><h2><span class="section-number">5.4. </span>Sets<a class="headerlink" href="#sets" title="Permalink to this headline">¶</a></h2>
<p>Python also includes a data type for <em>sets</em>.  A set is an unordered collection
with no duplicate elements.  Basic uses include membership testing and
eliminating duplicate entries.  Set objects also support mathematical operations
like union, intersection, difference, and symmetric difference.</p>
<p>Curly braces or the <a class="reference internal" href="../library/stdtypes.html#set" title="set"><code class="xref py py-func docutils literal notranslate"><span class="pre">set()</span></code></a> function can be used to create sets.  Note: to
create an empty set you have to use <code class="docutils literal notranslate"><span class="pre">set()</span></code>, not <code class="docutils literal notranslate"><span class="pre">{}</span></code>; the latter creates an
empty dictionary, a data structure that we discuss in the next section.</p>
<p>Here is a brief demonstration:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">basket</span> <span class="o">=</span> <span class="p">{'{'}</span><span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;pear&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;banana&#39;</span><span class="p">{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">print</span><span class="p">(</span><span class="n">basket</span><span class="p">)</span>                      <span class="c1"># show that duplicates have been removed</span>
<span class="go">{'{'}&#39;orange&#39;, &#39;banana&#39;, &#39;pear&#39;, &#39;apple&#39;{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;orange&#39;</span> <span class="ow">in</span> <span class="n">basket</span>                 <span class="c1"># fast membership testing</span>
<span class="go">True</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;crabgrass&#39;</span> <span class="ow">in</span> <span class="n">basket</span>
<span class="go">False</span>

<span class="gp">&gt;&gt;&gt; </span><span class="c1"># Demonstrate set operations on unique letters from two words</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="nb">set</span><span class="p">(</span><span class="s1">&#39;abracadabra&#39;</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">b</span> <span class="o">=</span> <span class="nb">set</span><span class="p">(</span><span class="s1">&#39;alacazam&#39;</span><span class="p">)</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span>                                  <span class="c1"># unique letters in a</span>
<span class="go">{'{'}&#39;a&#39;, &#39;r&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">-</span> <span class="n">b</span>                              <span class="c1"># letters in a but not in b</span>
<span class="go">{'{'}&#39;r&#39;, &#39;d&#39;, &#39;b&#39;{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">|</span> <span class="n">b</span>                              <span class="c1"># letters in a or b or both</span>
<span class="go">{'{'}&#39;a&#39;, &#39;c&#39;, &#39;r&#39;, &#39;d&#39;, &#39;b&#39;, &#39;m&#39;, &#39;z&#39;, &#39;l&#39;{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">&amp;</span> <span class="n">b</span>                              <span class="c1"># letters in both a and b</span>
<span class="go">{'{'}&#39;a&#39;, &#39;c&#39;{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">^</span> <span class="n">b</span>                              <span class="c1"># letters in a or b but not both</span>
<span class="go">{'{'}&#39;r&#39;, &#39;d&#39;, &#39;b&#39;, &#39;m&#39;, &#39;z&#39;, &#39;l&#39;{'}'}</span>
</pre></div>
</div>
<p>Similarly to <a class="reference internal" href="#tut-listcomps"><span class="std std-ref">list comprehensions</span></a>, set comprehensions
are also supported:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">a</span> <span class="o">=</span> <span class="p">{'{'}</span><span class="n">x</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="s1">&#39;abracadabra&#39;</span> <span class="k">if</span> <span class="n">x</span> <span class="ow">not</span> <span class="ow">in</span> <span class="s1">&#39;abc&#39;</span><span class="p">{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">a</span>
<span class="go">{'{'}&#39;r&#39;, &#39;d&#39;{'}'}</span>
</pre></div>
</div>
</section>
<section id="dictionaries">
<span id="tut-dictionaries"></span><h2><span class="section-number">5.5. </span>Dictionaries<a class="headerlink" href="#dictionaries" title="Permalink to this headline">¶</a></h2>
<p>Another useful data type built into Python is the <em>dictionary</em> (see
<a class="reference internal" href="../library/stdtypes.html#typesmapping"><span class="std std-ref">Mapping Types — dict</span></a>). Dictionaries are sometimes found in other languages as
“associative memories” or “associative arrays”.  Unlike sequences, which are
indexed by a range of numbers, dictionaries are indexed by <em>keys</em>, which can be
any immutable type; strings and numbers can always be keys.  Tuples can be used
as keys if they contain only strings, numbers, or tuples; if a tuple contains
any mutable object either directly or indirectly, it cannot be used as a key.
You can’t use lists as keys, since lists can be modified in place using index
assignments, slice assignments, or methods like <code class="xref py py-meth docutils literal notranslate"><span class="pre">append()</span></code> and
<code class="xref py py-meth docutils literal notranslate"><span class="pre">extend()</span></code>.</p>
<p>It is best to think of a dictionary as a set of <em>key: value</em> pairs,
with the requirement that the keys are unique (within one dictionary). A pair of
braces creates an empty dictionary: <code class="docutils literal notranslate"><span class="pre">{}</span></code>. Placing a comma-separated list of
key:value pairs within the braces adds initial key:value pairs to the
dictionary; this is also the way dictionaries are written on output.</p>
<p>The main operations on a dictionary are storing a value with some key and
extracting the value given the key.  It is also possible to delete a key:value
pair with <code class="docutils literal notranslate"><span class="pre">del</span></code>. If you store using a key that is already in use, the old
value associated with that key is forgotten.  It is an error to extract a value
using a non-existent key.</p>
<p>Performing <code class="docutils literal notranslate"><span class="pre">list(d)</span></code> on a dictionary returns a list of all the keys
used in the dictionary, in insertion order (if you want it sorted, just use
<code class="docutils literal notranslate"><span class="pre">sorted(d)</span></code> instead). To check whether a single key is in the
dictionary, use the <a class="reference internal" href="../reference/expressions.html#in"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">in</span></code></a> keyword.</p>
<p>Here is a small example using a dictionary:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span> <span class="o">=</span> <span class="p">{'{'}</span><span class="s1">&#39;jack&#39;</span><span class="p">:</span> <span class="mi">4098</span><span class="p">,</span> <span class="s1">&#39;sape&#39;</span><span class="p">:</span> <span class="mi">4139</span><span class="p">{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span><span class="p">[</span><span class="s1">&#39;guido&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">4127</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span>
<span class="go">{'{'}&#39;jack&#39;: 4098, &#39;sape&#39;: 4139, &#39;guido&#39;: 4127{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span><span class="p">[</span><span class="s1">&#39;jack&#39;</span><span class="p">]</span>
<span class="go">4098</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">del</span> <span class="n">tel</span><span class="p">[</span><span class="s1">&#39;sape&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span><span class="p">[</span><span class="s1">&#39;irv&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">4127</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">tel</span>
<span class="go">{'{'}&#39;jack&#39;: 4098, &#39;guido&#39;: 4127, &#39;irv&#39;: 4127{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">list</span><span class="p">(</span><span class="n">tel</span><span class="p">)</span>
<span class="go">[&#39;jack&#39;, &#39;guido&#39;, &#39;irv&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="nb">sorted</span><span class="p">(</span><span class="n">tel</span><span class="p">)</span>
<span class="go">[&#39;guido&#39;, &#39;irv&#39;, &#39;jack&#39;]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;guido&#39;</span> <span class="ow">in</span> <span class="n">tel</span>
<span class="go">True</span>
<span class="gp">&gt;&gt;&gt; </span><span class="s1">&#39;jack&#39;</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">tel</span>
<span class="go">False</span>
</pre></div>
</div>
<p>The <a class="reference internal" href="../library/stdtypes.html#dict" title="dict"><code class="xref py py-func docutils literal notranslate"><span class="pre">dict()</span></code></a> constructor builds dictionaries directly from sequences of
key-value pairs:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">dict</span><span class="p">([(</span><span class="s1">&#39;sape&#39;</span><span class="p">,</span> <span class="mi">4139</span><span class="p">),</span> <span class="p">(</span><span class="s1">&#39;guido&#39;</span><span class="p">,</span> <span class="mi">4127</span><span class="p">),</span> <span class="p">(</span><span class="s1">&#39;jack&#39;</span><span class="p">,</span> <span class="mi">4098</span><span class="p">)])</span>
<span class="go">{'{'}&#39;sape&#39;: 4139, &#39;guido&#39;: 4127, &#39;jack&#39;: 4098{'}'}</span>
</pre></div>
</div>
<p>In addition, dict comprehensions can be used to create dictionaries from
arbitrary key and value expressions:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="p">{'{'}</span><span class="n">x</span><span class="p">:</span> <span class="n">x</span><span class="o">**</span><span class="mi">2</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">6</span><span class="p">){'}'}</span>
<span class="go">{'{'}2: 4, 4: 16, 6: 36{'}'}</span>
</pre></div>
</div>
<p>When the keys are simple strings, it is sometimes easier to specify pairs using
keyword arguments:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="nb">dict</span><span class="p">(</span><span class="n">sape</span><span class="o">=</span><span class="mi">4139</span><span class="p">,</span> <span class="n">guido</span><span class="o">=</span><span class="mi">4127</span><span class="p">,</span> <span class="n">jack</span><span class="o">=</span><span class="mi">4098</span><span class="p">)</span>
<span class="go">{'{'}&#39;sape&#39;: 4139, &#39;guido&#39;: 4127, &#39;jack&#39;: 4098{'}'}</span>
</pre></div>
</div>
</section>
<section id="looping-techniques">
<span id="tut-loopidioms"></span><h2><span class="section-number">5.6. </span>Looping Techniques<a class="headerlink" href="#looping-techniques" title="Permalink to this headline">¶</a></h2>
<p>When looping through dictionaries, the key and corresponding value can be
retrieved at the same time using the <code class="xref py py-meth docutils literal notranslate"><span class="pre">items()</span></code> method.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">knights</span> <span class="o">=</span> <span class="p">{'{'}</span><span class="s1">&#39;gallahad&#39;</span><span class="p">:</span> <span class="s1">&#39;the pure&#39;</span><span class="p">,</span> <span class="s1">&#39;robin&#39;</span><span class="p">:</span> <span class="s1">&#39;the brave&#39;</span><span class="p">{'}'}</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">k</span><span class="p">,</span> <span class="n">v</span> <span class="ow">in</span> <span class="n">knights</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">k</span><span class="p">,</span> <span class="n">v</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">gallahad the pure</span>
<span class="go">robin the brave</span>
</pre></div>
</div>
<p>When looping through a sequence, the position index and corresponding value can
be retrieved at the same time using the <a class="reference internal" href="../library/functions.html#enumerate" title="enumerate"><code class="xref py py-func docutils literal notranslate"><span class="pre">enumerate()</span></code></a> function.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">v</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">([</span><span class="s1">&#39;tic&#39;</span><span class="p">,</span> <span class="s1">&#39;tac&#39;</span><span class="p">,</span> <span class="s1">&#39;toe&#39;</span><span class="p">]):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">v</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">0 tic</span>
<span class="go">1 tac</span>
<span class="go">2 toe</span>
</pre></div>
</div>
<p>To loop over two or more sequences at the same time, the entries can be paired
with the <a class="reference internal" href="../library/functions.html#zip" title="zip"><code class="xref py py-func docutils literal notranslate"><span class="pre">zip()</span></code></a> function.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">questions</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">,</span> <span class="s1">&#39;quest&#39;</span><span class="p">,</span> <span class="s1">&#39;favorite color&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">answers</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;lancelot&#39;</span><span class="p">,</span> <span class="s1">&#39;the holy grail&#39;</span><span class="p">,</span> <span class="s1">&#39;blue&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">q</span><span class="p">,</span> <span class="n">a</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">questions</span><span class="p">,</span> <span class="n">answers</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;What is your </span><span class="si">{0}</span><span class="s1">?  It is </span><span class="si">{1}</span><span class="s1">.&#39;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">q</span><span class="p">,</span> <span class="n">a</span><span class="p">))</span>
<span class="gp">...</span>
<span class="go">What is your name?  It is lancelot.</span>
<span class="go">What is your quest?  It is the holy grail.</span>
<span class="go">What is your favorite color?  It is blue.</span>
</pre></div>
</div>
<p>To loop over a sequence in reverse, first specify the sequence in a forward
direction and then call the <a class="reference internal" href="../library/functions.html#reversed" title="reversed"><code class="xref py py-func docutils literal notranslate"><span class="pre">reversed()</span></code></a> function.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">reversed</span><span class="p">(</span><span class="nb">range</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">2</span><span class="p">)):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">9</span>
<span class="go">7</span>
<span class="go">5</span>
<span class="go">3</span>
<span class="go">1</span>
</pre></div>
</div>
<p>To loop over a sequence in sorted order, use the <a class="reference internal" href="../library/functions.html#sorted" title="sorted"><code class="xref py py-func docutils literal notranslate"><span class="pre">sorted()</span></code></a> function which
returns a new sorted list while leaving the source unaltered.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">basket</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;pear&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;banana&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">sorted</span><span class="p">(</span><span class="n">basket</span><span class="p">):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">apple</span>
<span class="go">apple</span>
<span class="go">banana</span>
<span class="go">orange</span>
<span class="go">orange</span>
<span class="go">pear</span>
</pre></div>
</div>
<p>Using <a class="reference internal" href="../library/stdtypes.html#set" title="set"><code class="xref py py-func docutils literal notranslate"><span class="pre">set()</span></code></a> on a sequence eliminates duplicate elements. The use of
<a class="reference internal" href="../library/functions.html#sorted" title="sorted"><code class="xref py py-func docutils literal notranslate"><span class="pre">sorted()</span></code></a> in combination with <a class="reference internal" href="../library/stdtypes.html#set" title="set"><code class="xref py py-func docutils literal notranslate"><span class="pre">set()</span></code></a> over a sequence is an idiomatic
way to loop over unique elements of the sequence in sorted order.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">basket</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;apple&#39;</span><span class="p">,</span> <span class="s1">&#39;pear&#39;</span><span class="p">,</span> <span class="s1">&#39;orange&#39;</span><span class="p">,</span> <span class="s1">&#39;banana&#39;</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">f</span> <span class="ow">in</span> <span class="nb">sorted</span><span class="p">(</span><span class="nb">set</span><span class="p">(</span><span class="n">basket</span><span class="p">)):</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">apple</span>
<span class="go">banana</span>
<span class="go">orange</span>
<span class="go">pear</span>
</pre></div>
</div>
<p>It is sometimes tempting to change a list while you are looping over it;
however, it is often simpler and safer to create a new list instead.</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="kn">import</span> <span class="nn">math</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">raw_data</span> <span class="o">=</span> <span class="p">[</span><span class="mf">56.2</span><span class="p">,</span> <span class="nb">float</span><span class="p">(</span><span class="s1">&#39;NaN&#39;</span><span class="p">),</span> <span class="mf">51.7</span><span class="p">,</span> <span class="mf">55.3</span><span class="p">,</span> <span class="mf">52.5</span><span class="p">,</span> <span class="nb">float</span><span class="p">(</span><span class="s1">&#39;NaN&#39;</span><span class="p">),</span> <span class="mf">47.8</span><span class="p">]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">filtered_data</span> <span class="o">=</span> <span class="p">[]</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">for</span> <span class="n">value</span> <span class="ow">in</span> <span class="n">raw_data</span><span class="p">:</span>
<span class="gp">... </span>    <span class="k">if</span> <span class="ow">not</span> <span class="n">math</span><span class="o">.</span><span class="n">isnan</span><span class="p">(</span><span class="n">value</span><span class="p">):</span>
<span class="gp">... </span>        <span class="n">filtered_data</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">value</span><span class="p">)</span>
<span class="gp">...</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">filtered_data</span>
<span class="go">[56.2, 51.7, 55.3, 52.5, 47.8]</span>
</pre></div>
</div>
</section>
<section id="more-on-conditions">
<span id="tut-conditions"></span><h2><span class="section-number">5.7. </span>More on Conditions<a class="headerlink" href="#more-on-conditions" title="Permalink to this headline">¶</a></h2>
<p>The conditions used in <code class="docutils literal notranslate"><span class="pre">while</span></code> and <code class="docutils literal notranslate"><span class="pre">if</span></code> statements can contain any
operators, not just comparisons.</p>
<p>The comparison operators <code class="docutils literal notranslate"><span class="pre">in</span></code> and <code class="docutils literal notranslate"><span class="pre">not</span> <span class="pre">in</span></code> are membership tests that
determine whether a value is in (or not in) a container.  The operators <code class="docutils literal notranslate"><span class="pre">is</span></code>
and <code class="docutils literal notranslate"><span class="pre">is</span> <span class="pre">not</span></code> compare whether two objects are really the same object.  All
comparison operators have the same priority, which is lower than that of all
numerical operators.</p>
<p>Comparisons can be chained.  For example, <code class="docutils literal notranslate"><span class="pre">a</span> <span class="pre">&lt;</span> <span class="pre">b</span> <span class="pre">==</span> <span class="pre">c</span></code> tests whether <code class="docutils literal notranslate"><span class="pre">a</span></code> is
less than <code class="docutils literal notranslate"><span class="pre">b</span></code> and moreover <code class="docutils literal notranslate"><span class="pre">b</span></code> equals <code class="docutils literal notranslate"><span class="pre">c</span></code>.</p>
<p>Comparisons may be combined using the Boolean operators <code class="docutils literal notranslate"><span class="pre">and</span></code> and <code class="docutils literal notranslate"><span class="pre">or</span></code>, and
the outcome of a comparison (or of any other Boolean expression) may be negated
with <code class="docutils literal notranslate"><span class="pre">not</span></code>.  These have lower priorities than comparison operators; between
them, <code class="docutils literal notranslate"><span class="pre">not</span></code> has the highest priority and <code class="docutils literal notranslate"><span class="pre">or</span></code> the lowest, so that <code class="docutils literal notranslate"><span class="pre">A</span> <span class="pre">and</span>
<span class="pre">not</span> <span class="pre">B</span> <span class="pre">or</span> <span class="pre">C</span></code> is equivalent to <code class="docutils literal notranslate"><span class="pre">(A</span> <span class="pre">and</span> <span class="pre">(not</span> <span class="pre">B))</span> <span class="pre">or</span> <span class="pre">C</span></code>. As always, parentheses
can be used to express the desired composition.</p>
<p>The Boolean operators <code class="docutils literal notranslate"><span class="pre">and</span></code> and <code class="docutils literal notranslate"><span class="pre">or</span></code> are so-called <em>short-circuit</em>
operators: their arguments are evaluated from left to right, and evaluation
stops as soon as the outcome is determined.  For example, if <code class="docutils literal notranslate"><span class="pre">A</span></code> and <code class="docutils literal notranslate"><span class="pre">C</span></code> are
true but <code class="docutils literal notranslate"><span class="pre">B</span></code> is false, <code class="docutils literal notranslate"><span class="pre">A</span> <span class="pre">and</span> <span class="pre">B</span> <span class="pre">and</span> <span class="pre">C</span></code> does not evaluate the expression
<code class="docutils literal notranslate"><span class="pre">C</span></code>.  When used as a general value and not as a Boolean, the return value of a
short-circuit operator is the last evaluated argument.</p>
<p>It is possible to assign the result of a comparison or other Boolean expression
to a variable.  For example,</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">string1</span><span class="p">,</span> <span class="n">string2</span><span class="p">,</span> <span class="n">string3</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="s1">&#39;Trondheim&#39;</span><span class="p">,</span> <span class="s1">&#39;Hammer Dance&#39;</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">non_null</span> <span class="o">=</span> <span class="n">string1</span> <span class="ow">or</span> <span class="n">string2</span> <span class="ow">or</span> <span class="n">string3</span>
<span class="gp">&gt;&gt;&gt; </span><span class="n">non_null</span>
<span class="go">&#39;Trondheim&#39;</span>
</pre></div>
</div>
<p>Note that in Python, unlike C, assignment inside expressions must be done
explicitly with the
<a class="reference internal" href="../faq/design.html#why-can-t-i-use-an-assignment-in-an-expression"><span class="std std-ref">walrus operator</span></a> <code class="docutils literal notranslate"><span class="pre">:=</span></code>.
This avoids a common class of problems encountered in C programs: typing <code class="docutils literal notranslate"><span class="pre">=</span></code>
in an expression when <code class="docutils literal notranslate"><span class="pre">==</span></code> was intended.</p>
</section>
<section id="comparing-sequences-and-other-types">
<span id="tut-comparing"></span><h2><span class="section-number">5.8. </span>Comparing Sequences and Other Types<a class="headerlink" href="#comparing-sequences-and-other-types" title="Permalink to this headline">¶</a></h2>
<p>Sequence objects typically may be compared to other objects with the same sequence
type. The comparison uses <em>lexicographical</em> ordering: first the first two
items are compared, and if they differ this determines the outcome of the
comparison; if they are equal, the next two items are compared, and so on, until
either sequence is exhausted. If two items to be compared are themselves
sequences of the same type, the lexicographical comparison is carried out
recursively.  If all items of two sequences compare equal, the sequences are
considered equal. If one sequence is an initial sub-sequence of the other, the
shorter sequence is the smaller (lesser) one.  Lexicographical ordering for
strings uses the Unicode code point number to order individual characters.
Some examples of comparisons between sequences of the same type:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>              <span class="o">&lt;</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span>
<span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>              <span class="o">&lt;</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">]</span>
<span class="s1">&#39;ABC&#39;</span> <span class="o">&lt;</span> <span class="s1">&#39;C&#39;</span> <span class="o">&lt;</span> <span class="s1">&#39;Pascal&#39;</span> <span class="o">&lt;</span> <span class="s1">&#39;Python&#39;</span>
<span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span>           <span class="o">&lt;</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span>
<span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>                 <span class="o">&lt;</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span>
<span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>             <span class="o">==</span> <span class="p">(</span><span class="mf">1.0</span><span class="p">,</span> <span class="mf">2.0</span><span class="p">,</span> <span class="mf">3.0</span><span class="p">)</span>
<span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="p">(</span><span class="s1">&#39;aa&#39;</span><span class="p">,</span> <span class="s1">&#39;ab&#39;</span><span class="p">))</span>   <span class="o">&lt;</span> <span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="p">(</span><span class="s1">&#39;abc&#39;</span><span class="p">,</span> <span class="s1">&#39;a&#39;</span><span class="p">),</span> <span class="mi">4</span><span class="p">)</span>
</pre></div>
</div>
<p>Note that comparing objects of different types with <code class="docutils literal notranslate"><span class="pre">&lt;</span></code> or <code class="docutils literal notranslate"><span class="pre">&gt;</span></code> is legal
provided that the objects have appropriate comparison methods.  For example,
mixed numeric types are compared according to their numeric value, so 0 equals
0.0, etc.  Otherwise, rather than providing an arbitrary ordering, the
interpreter will raise a <a class="reference internal" href="../library/exceptions.html#TypeError" title="TypeError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">TypeError</span></code></a> exception.</p>
<p class="rubric">Footnotes</p>
<dl class="footnote brackets">
<dt class="label" id="id2"><span class="brackets"><a class="fn-backref" href="#id1">1</a></span></dt>
<dd><p>Other languages may return the mutated object, which allows method
chaining, such as <code class="docutils literal notranslate"><span class="pre">d-&gt;insert(&quot;a&quot;)-&gt;remove(&quot;b&quot;)-&gt;sort();</span></code>.</p>
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
<li><a class="reference internal" href="#">5. Data Structures</a><ul>
<li><a class="reference internal" href="#more-on-lists">5.1. More on Lists</a><ul>
<li><a class="reference internal" href="#using-lists-as-stacks">5.1.1. Using Lists as Stacks</a></li>
<li><a class="reference internal" href="#using-lists-as-queues">5.1.2. Using Lists as Queues</a></li>
<li><a class="reference internal" href="#list-comprehensions">5.1.3. List Comprehensions</a></li>
<li><a class="reference internal" href="#nested-list-comprehensions">5.1.4. Nested List Comprehensions</a></li>
</ul>
</li>
<li><a class="reference internal" href="#the-del-statement">5.2. The <code class="xref std std-keyword docutils literal notranslate"><span class="pre">del</span></code> statement</a></li>
<li><a class="reference internal" href="#tuples-and-sequences">5.3. Tuples and Sequences</a></li>
<li><a class="reference internal" href="#sets">5.4. Sets</a></li>
<li><a class="reference internal" href="#dictionaries">5.5. Dictionaries</a></li>
<li><a class="reference internal" href="#looping-techniques">5.6. Looping Techniques</a></li>
<li><a class="reference internal" href="#more-on-conditions">5.7. More on Conditions</a></li>
<li><a class="reference internal" href="#comparing-sequences-and-other-types">5.8. Comparing Sequences and Other Types</a></li>
</ul>
</li>
</ul>

</div>
<div role="note" aria-label="source link">
  <h3>This Page</h3>
  <ul class="this-page-menu">      
    <li>
      <a href="https://github.com/python/cpython/blob/3.11/Doc/tutorial/datastructures.rst"
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

export default Structures
