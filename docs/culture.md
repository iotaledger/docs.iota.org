---
sidebar_position: 2
---

# Docs Culture

> How we write documentation!

## Framework

- tutorials 
- how-to guides 
- technical reference 
- explanation 


### Rules

- **README's everywhere**:
Every folder has an README.md, which explains what visitors can find here in a simple language (KISS).
- **KISS**: [keep it simple, stupid](https://en.wikipedia.org/wiki/KISS_principle)
- **DRY**: [Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- **always up to date**: Before merging a Pull Request - check if documentaiton is up to date.

## Repository Structure

```
.
├── docs # place for documentation
│   └── README.md # descibes how documentation works
│   └── SUMMMARY.md # table of content
│   └── welcome.md # Say hello to the docs visitor
│   └── overview.md # Give visitor and overview of your project
│   └── architecture.md # Detailed architecture (draw.io image)
│   └── references.md # technical reference (rust docs, api references, etc)
│   └── tutorials
│      └── README.md # whats a tutorial, how i can add one?
│      └── ... # your tutorials
│   └── guides
│      └── README.md # whats a guide, how i can add one?
│      └── ... # your guides
├── src # your project code
│   └── README.md  # explain your code, folder structure and entrypoints.
│   └── ...
├── README.md # describes the project for repo visitors.
├── ...
```
This was inspried by the [Diátaxis Framework](https://diataxis.fr/).