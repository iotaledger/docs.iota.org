---
sidebar_position: 1
---

# Style Guide

## Quick Reference Guide

### **Tone and Content**

- [Be conversational and friendly](https://developers.google.com/style/tone) without being frivolous.
- [Don't pre-announce anything](https://developers.google.com/style/future) in documentation.
- [Use descriptive link text](https://developers.google.com/style/link-text).
- [Write for a global audience](https://developers.google.com/style/translation).

### **Language and Grammar**

- [Use second person](https://developers.google.com/style/person): but use "you" and "we" where applicable
- [Use active voice](https://developers.google.com/style/voice): make clear who's performing the action and actions over utility verbs (open the door, not use the door, debug console displays errors, not contains errors).
- [Use standard American spelling](https://developers.google.com/style/spelling) and punctuation.
- [Put conditional clauses before instructions](https://developers.google.com/style/clause-order), not after.
- [For usage and spelling of specific words, see the word list](https://developers.google.com/style/wordlist); additionally, only use words you *know*

**Formatting, Punctuation, and Organization**

- For headings from the first to the third level, capitalize the words; headings below this level should use sentence case
- [Use numbered lists](https://developers.google.com/style/lists) for sequences.
- [Use bulleted lists](https://developers.google.com/style/lists) for most other lists.
- [Use description lists](https://developers.google.com/style/lists) for pairs of related pieces of data.
- [Use serial commas](https://developers.google.com/style/commas-serial).
- [Put code-related text in code font](https://developers.google.com/style/code-in-text).
- Put UI in weak emphasis
- Use the DD/MM/YYYY formatting

## Comprehensive Guide

### **General Dos and Don'ts**

Don't use *&* instead of *and* in headings, text, navigation, or tables of contents. However, it's OK to use *&* when referencing UI elements that use *&*, or in table headings and diagram labels where space constraints require abbreviation. Of course, it's fine to use & for technical purposes in code.

### **Reading Ease**

- Break up walls of text to aid in scannability. For example, separate paragraphs, create headings, and use lists.
- Define acronyms and abbreviations on first usage and if they're used infrequently.
- Use parallel writing structures for similar things. For example, start each list in the same format.
- Place distinguishing and important information of a paragraph in the first sentence to aid in scannability.
- Use clear and direct language. Avoid the use of double negatives and exceptions for exceptions.
  - **Recommended:** You can continue without a path.
  - **Not recommended:** A missing path won't prevent you from continuing.

### **Headings and Titles**

Use descriptive headings and titles because they help a user navigate their browser and the page. It's easier to jump between pages and sections of a page if the headings and titles are unique.

- Use [meaningful link text](https://developers.google.com/style/link-text). Links should make sense when read out of context.
- Don't use *click here* or *read this document*, use “For further reference” or “For further reading” or something along those lines
- If a link downloads a file, the link text needs to indicate this action as well as the file type.

### **Images**

- For every image, provide [alt text](https://developers.google.com/style/images#alt-text) that adequately summarizes the intent of each image.
- Don't present new information in images; always provide an equivalent text explanation with the image.
- Don't repeat images unless absolutely necessary.
- Don't use images of text, code samples, or terminal output. Use actual text.
- Use SVG instead of PNG if available. SVGs stay sharp when you zoom in on the image.

### **Videos, Recordings, and GIFs**

- Ensure that captions can be translated into major languages.
- Don't use flickering or flashing elements. They can cause anything from motion sickness to a seizure.

### **Tables**

- Introduce tables in the text preceding the table.
- Use table headings for the first column and the first row only. Use the [th element](https://www.w3.org/TR/html4/struct/tables.html#edef-TH).
- Avoid when possible tables in the middle of a numbered procedure.
- Don't merge cells. Don't use colspan or rowspan attributes.
- Don't use tables unless it's the best method to present your information. 

### **Document Rendering**

Don't use color, size, location, or other visual cues as the primary way of communicating information.

- If you're using color, icon, or outline thickness to convey state, then also provide a secondary cue, such as a change in the text label.
- Refer to buttons and other elements by their label (or [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), if they're visual elements)—for example:
  - **Recommended:** Click **Save**.
  - **Not recommended:** Click the round button.
- Don't use directional language to orient the reader, such as *above*, *below*, or *right-hand side*. This type of language doesn't work well for accessibility or for localization reasons. If a [UI element](https://developers.google.com/style/ui-elements) is hard to find, [provide a screenshot](https://developers.google.com/style/images).
  - **Recommended:** Click menu **Menu**.
  - **Not recommended:** In the left-side panel, click the button with three lines.

### **Text-formatting Summary**

#### **Bold**

Use bold formatting, for [UI elements](https://developers.google.com/style/ui-elements#formatting) and at the beginning of [notices](https://developers.google.com/style/notices).

#### **Italic** 

Use italics formatting, when drawing attention to a specific word or phrase, such as when [defining terms](https://developers.google.com/style/formatting-key-terms) or [using words as words](https://developers.google.com/style/formatting-words-as-words). Italicize titles of books, movies, web series, and other full-length works, unless they're part of a link. 

Italicize parameter names. For example, when you refer to the parameters of a method like doSomething(Uri data, int count), italicize *data* and *count*.

Italicize mathematical variables and version variables. For example, *x* + *y* = 3, version 1.4.*x*.

#### **Underline**

Do not underline.

#### **Sentence case and capitalization**

Use American English style for [general capitalization](https://developers.google.com/style/capitalization). For headings 1-3, capitalize the applicable words; for headings under those levels, use sentence case.

#### **Quotation marks**

In general, use American English style when [punctuating quotations](https://developers.google.com/style/quotation-marks).

For titles of shorter works—such as articles or episodes in a web series—put titles in quotation marks, unless they're part of a link.

#### **Font type, size, and color**

Times New Roman, 12 pt, black, when applicable.

## **Writing for a global audience**

**Key Point:** Write in US English, but write with translation and a global audience in mind.

### **General Dos and Don'ts**

- Use [present tense](https://developers.google.com/style/tense).
- Write [dates and times](https://developers.google.com/style/dates-times) in the global way (DD/MM/YY and 00:00)
- Use qualifying nouns for technical keywords. For example, when referring to a file called example.yaml, call it the *example.yaml* *file* and not *example.yaml* by itself. 
- Provide context. Don't assume that the reader already knows what you're talking about.
- Use negative constructions on a case by case basis, like when explaining what a feature does and what does and doesn’t work with it. 

### **Write Short, Clear, and Precise Sentences**

- Use active voice. 
- Address the reader directly. Use *you*, instead of *the user* or *they*. 
- Use a simple word. For example, don't use words like *commence* when you mean *start* or *begin*. Don't use *consequently* when you mean *so*. Don't use words like *utilize* or *leverage* when you mean *use*. However, do not avoid complex words where they do belong.
- Use a single word when it conveys the same idea as a phrase. For example, don't use a phrase like *a number of* when you can use *some* or *many*.
- Avoid phrasal verbs when possible. A phrasal verb combines multiple words to form a single verb phrase. These verbs are also known as compound verbs. Try to substitute a simpler verb first. There might not be a better verb; for example, a few exceptions to this rule include *set up*, *log in*, and *sign in*.
  - **Recommended:** This document uses the following terms:
  - **Not recommended:** This document makes use of the following terms:
- Define abbreviations. Abbreviations can be confusing out of context, and they don't translate well. Spell things out whenever possible, at least the first time that you use a given term. 
- Don't use too many modifiers. In particular, don't use more than two nouns as modifiers of another noun.
  - **Recommended:** A cloud-native DevSecOps pipeline in a hybrid environment
  - **Not recommended:** A hybrid cloud-native DevSecOps pipeline
- Don't misplace modifiers. For example, place a word like *only* immediately before the noun or verb that it relates to.
  - **Recommended:** Developers need to apply for only one token.
  - **Not recommended:** Developers only need to apply for one token.
- Don't omit relative pronouns. To provide clarity and to avoid ambiguity, use relative pronouns such as *that* and *who*.
  - **Recommended:** Running in a hybrid environment means that some of your processing happens on Google Cloud and other processing remains on-premises.
  - **Not recommended:** Running in a hybrid environment means some of your processing happens on Google Cloud and other processing remains on-premises.
- Clarify antecedents. Using pronouns can get tricky when translators are working with small, unconnected strings of text. Help them out by making things as clear as possible. For example, if a pronoun is ambiguous, then replace it with the appropriate noun.
  - **Recommended:** If you use the term *green beer* in an ad, then make sure that the ad is targeted.
  - **Not recommended:** If you use the term *green beer* in an ad, then make sure that it's targeted.
- Use helper words. Helper words, such as *if*, *then*, and *of*, are frequently left out of conversational English. Use these words to avoid ambiguity.

### **Be Consistent**

- If you use a particular term for a particular concept in one place, then use that exact same term elsewhere, including the same capitalization. 
- Don't use the same word to mean different things. In particular, avoid using the same word as both a noun and a verb in close proximity. Use standardized phrases for frequently used sentences, introductory phrases, and other common tasks. 
- Use standard English word order. Sentences follow the *subject + verb + object* order.
- Try to keep the main subject and verb as close to the beginning of the sentence as possible.
- Use the conditional clause first. If you want to tell the audience to do something in a particular circumstance, mention the circumstance before you provide the instruction. 
- Make list items consistent. Make list items parallel in structure. 
- Be consistent in your capitalization and punctuation. 
- Use consistent typographic formats. 
- Use bold and italics consistently. Don't switch from using italics for emphasis to underlining. 
- Use consistent capitalization. 

### **Be Inclusive**

You're not writing for your culture. Write with inclusivity in mind. 

- Don't be too culturally specific. In particular, don't refer to specific holidays, cultural practices, or sports unless you're certain they're known worldwide.
- Avoid colloquialisms, idioms, or slang. Phrases like *ballpark figure*, *back burner*, or *hang in there* can be confusing and difficult to translate.

### **Using Third-party Sources**

**Key Point:** Write using your own words. Don't lift content from third-party sources.

Don't copy content from another source because it might violate copyright. Instead, paraphrase and link to their content.

Content includes the following types: text, images, code, logos, and speech.

### **Voice and Tone**

**Key Point:** Be conversational without being frivolous.

In your documents, aim for a voice and tone that's conversational, friendly, and respectful without being overly colloquial or frivolous; a voice that's casual and natural and approachable, not pedantic or pushy. Try to sound like a knowledgeable friend who understands what the developer wants to do.

Don't try to write exactly the way you speak; you probably speak more colloquially and verbosely than you should write, at least for developer documentation. But aim for a conversational tone rather than a formal one.

Don't try to be super-entertaining, but also don't aim for super-dry. Be human, let your personality show, be memorable; you can even be a little funny now and then. But remember that the primary purpose of the document is to provide information to someone who's looking for it.

Remember that many readers aren't fluent English speakers, many of them come from cultures different from yours, and your document might be translated into other languages. 

### **Some Things to Avoid Where Possible**

- Buzzwords or technical jargon.
- Being too cutesy.
- [Ableist language](https://developers.google.com/style/inclusive-documentation#ableist-language) or figures of speech.
- Placeholder phrases like *please note* and *at this time.*
- Choppy or long-winded sentences.
- Starting all sentences with the same phrase (such as *You can* or *To do*).
- Current pop-culture references.
- Jokes at the expense of customers, competitors, or anyone else.
- Exclamation marks, except in rare really exciting moments.
- Wackiness, zaniness, and goofiness.
- Mixing metaphors or taking a metaphor too far.
- Funny lines that aren't closely related to the topic, or that require much off-topic verbiage, or that obscure information.
- Phrasing that denigrates or insults any group of people.
- Phrasing in terms of *let's* do something.Using phrases like *simply*, *It's that simple*, *It's easy*, or *quickly* in a procedure.

### **Some Techniques and Approaches to Consider**

- If you're having trouble expressing something, step back and ask yourself, "What am I trying to say?" Often, the answer you give yourself reveals what you should be saying in the document.
- If you're uncertain about your phrasing or tone, ask a colleague to take a look.
- Try reading parts of your document out loud, or at least mouthing the words. Does it sound natural? Not every sentence has to sound natural when spoken; these are written documents. But if you come across a sentence that's awkward or confusing when spoken, consider whether you can make it more conversational.
- Use transitions between sentences. Phrases like *Though* or *This way* can make paragraphs less stilted. (Then again, sometimes transitions like *However* or *Nonetheless* can make paragraphs more stilted.)
- Even if you're having trouble hitting the right tone, make sure you're communicating useful information in a clear and direct way; that's the most important part.