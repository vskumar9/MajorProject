import React from 'react'

const Interpreter = () => {
  return (
    <div className='p-body'>
          <section id="using-the-python-interpreter">
<span id="tut-using"></span><h1><span class="section-number">2. </span>Using the Python Interpreter<a class="headerlink" href="#using-the-python-interpreter" title="Permalink to this headline">¶</a></h1>
<section id="invoking-the-interpreter">
<span id="tut-invoking"></span><h2><span class="section-number">2.1. </span>Invoking the Interpreter<a class="headerlink" href="#invoking-the-interpreter" title="Permalink to this headline">¶</a></h2>
<p>The Python interpreter is usually installed as <code class="file docutils literal notranslate"><span class="pre">/usr/local/bin/python3.11</span></code>
on those machines where it is available; putting <code class="file docutils literal notranslate"><span class="pre">/usr/local/bin</span></code> in your
Unix shell’s search path makes it possible to start it by typing the command:</p>
<div class="highlight-text notranslate"><div class="highlight"><pre><span></span>python3.11
</pre></div>
</div>
<p>to the shell. <a class="footnote-reference brackets" href="#id2" id="id1">1</a> Since the choice of the directory where the interpreter lives
is an installation option, other places are possible; check with your local
Python guru or system administrator.  (E.g., <code class="file docutils literal notranslate"><span class="pre">/usr/local/python</span></code> is a
popular alternative location.)</p>
<p>On Windows machines where you have installed Python from the <a class="reference internal" href="../using/windows.html#windows-store"><span class="std std-ref">Microsoft Store</span></a>, the <code class="file docutils literal notranslate"><span class="pre">python3.11</span></code> command will be available. If you have
the <a class="reference internal" href="../using/windows.html#launcher"><span class="std std-ref">py.exe launcher</span></a> installed, you can use the <code class="file docutils literal notranslate"><span class="pre">py</span></code>
command. See <a class="reference internal" href="../using/windows.html#setting-envvars"><span class="std std-ref">Excursus: Setting environment variables</span></a> for other ways to launch Python.</p>
<p>Typing an end-of-file character (<kbd class="kbd compound docutils literal notranslate"><kbd class="kbd docutils literal notranslate">Control</kbd>-<kbd class="kbd docutils literal notranslate">D</kbd></kbd> on Unix, <kbd class="kbd compound docutils literal notranslate"><kbd class="kbd docutils literal notranslate">Control</kbd>-<kbd class="kbd docutils literal notranslate">Z</kbd></kbd> on
Windows) at the primary prompt causes the interpreter to exit with a zero exit
status.  If that doesn’t work, you can exit the interpreter by typing the
following command: <code class="docutils literal notranslate"><span class="pre">quit()</span></code>.</p>
<p>The interpreter’s line-editing features include interactive editing, history
substitution and code completion on systems that support the <a class="reference external" href="https://tiswww.case.edu/php/chet/readline/rltop.html">GNU Readline</a> library.
Perhaps the quickest check to see whether command line editing is supported is
typing <kbd class="kbd compound docutils literal notranslate"><kbd class="kbd docutils literal notranslate">Control</kbd>-<kbd class="kbd docutils literal notranslate">P</kbd></kbd> to the first Python prompt you get.  If it beeps, you
have command line editing; see Appendix <a class="reference internal" href="interactive.html#tut-interacting"><span class="std std-ref">Interactive Input Editing and History Substitution</span></a> for an
introduction to the keys.  If nothing appears to happen, or if <code class="docutils literal notranslate"><span class="pre">^P</span></code> is
echoed, command line editing isn’t available; you’ll only be able to use
backspace to remove characters from the current line.</p>
<p>The interpreter operates somewhat like the Unix shell: when called with standard
input connected to a tty device, it reads and executes commands interactively;
when called with a file name argument or with a file as standard input, it reads
and executes a <em>script</em> from that file.</p>
<p>A second way of starting the interpreter is <code class="docutils literal notranslate"><span class="pre">python</span> <span class="pre">-c</span> <span class="pre">command</span> <span class="pre">[arg]</span> <span class="pre">...</span></code>,
which executes the statement(s) in <em>command</em>, analogous to the shell’s
<a class="reference internal" href="../using/cmdline.html#cmdoption-c"><code class="xref std std-option docutils literal notranslate"><span class="pre">-c</span></code></a> option.  Since Python statements often contain spaces or other
characters that are special to the shell, it is usually advised to quote
<em>command</em> in its entirety.</p>
<p>Some Python modules are also useful as scripts.  These can be invoked using
<code class="docutils literal notranslate"><span class="pre">python</span> <span class="pre">-m</span> <span class="pre">module</span> <span class="pre">[arg]</span> <span class="pre">...</span></code>, which executes the source file for <em>module</em> as
if you had spelled out its full name on the command line.</p>
<p>When a script file is used, it is sometimes useful to be able to run the script
and enter interactive mode afterwards.  This can be done by passing <a class="reference internal" href="../using/cmdline.html#cmdoption-i"><code class="xref std std-option docutils literal notranslate"><span class="pre">-i</span></code></a>
before the script.</p>
<p>All command line options are described in <a class="reference internal" href="../using/cmdline.html#using-on-general"><span class="std std-ref">Command line and environment</span></a>.</p>
<section id="argument-passing">
<span id="tut-argpassing"></span><h3><span class="section-number">2.1.1. </span>Argument Passing<a class="headerlink" href="#argument-passing" title="Permalink to this headline">¶</a></h3>
<p>When known to the interpreter, the script name and additional arguments
thereafter are turned into a list of strings and assigned to the <code class="docutils literal notranslate"><span class="pre">argv</span></code>
variable in the <code class="docutils literal notranslate"><span class="pre">sys</span></code> module.  You can access this list by executing <code class="docutils literal notranslate"><span class="pre">import</span>
<span class="pre">sys</span></code>.  The length of the list is at least one; when no script and no arguments
are given, <code class="docutils literal notranslate"><span class="pre">sys.argv[0]</span></code> is an empty string.  When the script name is given as
<code class="docutils literal notranslate"><span class="pre">'-'</span></code> (meaning  standard input), <code class="docutils literal notranslate"><span class="pre">sys.argv[0]</span></code> is set to <code class="docutils literal notranslate"><span class="pre">'-'</span></code>.  When
<a class="reference internal" href="../using/cmdline.html#cmdoption-c"><code class="xref std std-option docutils literal notranslate"><span class="pre">-c</span></code></a> <em>command</em> is used, <code class="docutils literal notranslate"><span class="pre">sys.argv[0]</span></code> is set to <code class="docutils literal notranslate"><span class="pre">'-c'</span></code>.  When
<a class="reference internal" href="../using/cmdline.html#cmdoption-m"><code class="xref std std-option docutils literal notranslate"><span class="pre">-m</span></code></a> <em>module</em> is used, <code class="docutils literal notranslate"><span class="pre">sys.argv[0]</span></code>  is set to the full name of the
located module.  Options found after  <a class="reference internal" href="../using/cmdline.html#cmdoption-c"><code class="xref std std-option docutils literal notranslate"><span class="pre">-c</span></code></a> <em>command</em> or <a class="reference internal" href="../using/cmdline.html#cmdoption-m"><code class="xref std std-option docutils literal notranslate"><span class="pre">-m</span></code></a>
<em>module</em> are not consumed  by the Python interpreter’s option processing but
left in <code class="docutils literal notranslate"><span class="pre">sys.argv</span></code> for  the command or module to handle.</p>
</section>
<section id="interactive-mode">
<span id="tut-interactive"></span><h3><span class="section-number">2.1.2. </span>Interactive Mode<a class="headerlink" href="#interactive-mode" title="Permalink to this headline">¶</a></h3>
<p>When commands are read from a tty, the interpreter is said to be in <em>interactive
mode</em>.  In this mode it prompts for the next command with the <em>primary prompt</em>,
usually three greater-than signs (<code class="docutils literal notranslate"><span class="pre">&gt;&gt;&gt;</span></code>); for continuation lines it prompts
with the <em>secondary prompt</em>, by default three dots (<code class="docutils literal notranslate"><span class="pre">...</span></code>). The interpreter
prints a welcome message stating its version number and a copyright notice
before printing the first prompt:</p>
<div class="highlight-shell-session notranslate"><div class="highlight"><pre><span></span><span class="gp">$ </span>python3.11
<span class="go">Python 3.11 (default, April 4 2021, 09:25:04)</span>
<span class="go">[GCC 10.2.0] on linux</span>
<span class="go">Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.</span>
<span class="go">&gt;&gt;&gt;</span>
</pre></div>
</div>
<p>Continuation lines are needed when entering a multi-line construct. As an
example, take a look at this <a class="reference internal" href="../reference/compound_stmts.html#if"><code class="xref std std-keyword docutils literal notranslate"><span class="pre">if</span></code></a> statement:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="gp">&gt;&gt;&gt; </span><span class="n">the_world_is_flat</span> <span class="o">=</span> <span class="kc">True</span>
<span class="gp">&gt;&gt;&gt; </span><span class="k">if</span> <span class="n">the_world_is_flat</span><span class="p">:</span>
<span class="gp">... </span>    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Be careful not to fall off!&quot;</span><span class="p">)</span>
<span class="gp">...</span>
<span class="go">Be careful not to fall off!</span>
</pre></div>
</div>
<p>For more on interactive mode, see <a class="reference internal" href="appendix.html#tut-interac"><span class="std std-ref">Interactive Mode</span></a>.</p>
</section>
</section>
<section id="the-interpreter-and-its-environment">
<span id="tut-interp"></span><h2><span class="section-number">2.2. </span>The Interpreter and Its Environment<a class="headerlink" href="#the-interpreter-and-its-environment" title="Permalink to this headline">¶</a></h2>
<section id="source-code-encoding">
<span id="tut-source-encoding"></span><h3><span class="section-number">2.2.1. </span>Source Code Encoding<a class="headerlink" href="#source-code-encoding" title="Permalink to this headline">¶</a></h3>
<p>By default, Python source files are treated as encoded in UTF-8.  In that
encoding, characters of most languages in the world can be used simultaneously
in string literals, identifiers and comments — although the standard library
only uses ASCII characters for identifiers, a convention that any portable code
should follow.  To display all these characters properly, your editor must
recognize that the file is UTF-8, and it must use a font that supports all the
characters in the file.</p>
<p>To declare an encoding other than the default one, a special comment line
should be added as the <em>first</em> line of the file.  The syntax is as follows:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="c1"># -*- coding: encoding -*-</span>
</pre></div>
</div>
<p>where <em>encoding</em> is one of the valid <a class="reference internal" href="../library/codecs.html#module-codecs" title="codecs: Encode and decode data and streams."><code class="xref py py-mod docutils literal notranslate"><span class="pre">codecs</span></code></a> supported by Python.</p>
<p>For example, to declare that Windows-1252 encoding is to be used, the first
line of your source code file should be:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="c1"># -*- coding: cp1252 -*-</span>
</pre></div>
</div>
<p>One exception to the <em>first line</em> rule is when the source code starts with a
<a class="reference internal" href="appendix.html#tut-scripts"><span class="std std-ref">UNIX “shebang” line</span></a>.  In this case, the encoding
declaration should be added as the second line of the file.  For example:</p>
<div class="highlight-python3 notranslate"><div class="highlight"><pre><span></span><span class="ch">#!/usr/bin/env python3</span>
<span class="c1"># -*- coding: cp1252 -*-</span>
</pre></div>
</div>
<p class="rubric">Footnotes</p>
<dl class="footnote brackets">
<dt class="label" id="id2"><span class="brackets"><a class="fn-backref" href="#id1">1</a></span></dt>
<dd><p>On Unix, the Python 3.x interpreter is by default not installed with the
executable named <code class="docutils literal notranslate"><span class="pre">python</span></code>, so that it does not conflict with a
simultaneously installed Python 2.x executable.</p>
</dd>
</dl>
</section>
</section>
</section>
    </div>
  )
}

export default Interpreter
