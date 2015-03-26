# LET'S HAVE A TRY AT ATOM

###The point of this document is to try atom, and get used to it.

General tools
------------------

######Italic and lists

Let's try atom. *Why?* Because:
  + It's new
  + It looks pretty good
  + It seems fun, although maybe not that convenient
  + It helps us render the .md files on GitHub
  + I just wanted to create a list so let's stop here
  ---------------------------------------------------------



######Numbered list

Let's now order the reason with respect to there importance
  1. It helps us render the .md files
  2. It looks pretty good
  3. It seems fun, at least because:
      * I like to code
      * I like the interface
      * It's another way to get better at GitHub
  4. It's new
---------------------------------------------------------

######Citation

LaoZi said it:
> You have to find the waaaay

---------------------------------------------------------

######Usage of backtik for code in sentence (see later)

I have no idea what a backtick is so here it goes:
There is a literal ``backtick (`)`` here

---------------------------------------------------------

######Real code representation

Let's have a try at the code blocks, in the example of GitHub:

    $ git pull
    $ git add "this is a new file"
    $ git status
    $ git commit -m "i just added a new file"
    $ git push

Let's try to confirm it:

      j'ecris du caca
      encore du caca


Another method:

```

$ git pull
$ git add "this is a new file"
$ git status
$ git commit -m "i just added a new file"
$ git push
```
---------------------------------------------------------

######Link insertion

Let's try to put a link to [GitHub](https://github.com/ "Yes, trus me, this goes to GitHub")

---------------------------------------------------------

######Image insertion

Oh and here is a picture
![Me](https://media.licdn.com/mpr/mpr/shrink_500_500/p/3/000/1dd/1e2/212b255.jpg "Naaaaaaaaw, cutie")

---------------------------------------------------------

######Code in the middle of a sentence - Use of (`)

Let's try to see what happens if we put some code in the middle of a sentence:

You can always start with updating your Git file on your PC, with the command `$ git pull `, this brings everything non up to date to your PC.



On the usage of \
--------------------------------

>The tool \ permits you to make everything appear as you write it, even if are involved characters that can be misinterpreted by Git/Atom.

>For example: [* + -]

If you want to use (\*) for a note, and write [\* this_is_the_explanation] Here is the result you have:

* this_is_the_explanation

In order to avoid that, write [\\* this_is_the_explanation]

Result:

\* this_is_the_explanation

Actually, [\*this_is_the_explanation] (no space) also works:

*this_is_the_explanation

In order to put a date like this [1986. What a great season!], the usage of \ is necessary. like this: [1986\\. What a great season] Otherwise, it is identified as a list and will appear as such.

Without \:
1986. What a great season!

With \

1986\. What a great season!

-----------------------------
