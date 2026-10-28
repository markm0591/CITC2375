Top NFL Quarterbacks Tracker

- Github Repository: https://github.com/markm0591/CITC2375/tree/main/client

- Live Site: https://citc2375-semester-project-q5o5.onrender.com/

- Project Topic: Top NFL Quarterbacks Rankings

## Planned Data Model

QB descriptors.
- name
- team
- description
- touchdowns
- interceptions
- passerRating
- possible later ranking?
- maybe somehow keep up with fantasy points?

Images sourced:
C:\Users\grand\OneDrive\Desktop\CITC2375\client\images\footballinfield.jpg
https://unsplash.com/photos/brown-and-black-wilson-football--nATH0CrkMU

## Project Progress

### Week 3
Added a css style sheet and linked all current pages. Created header/footer styling with nav. Organized main. Add styling for cards including a hover effect I like. Will probably add this effect to anything that is clickable in the future. (Nav, Links, Player Cards). I still have this image in there of the football in the field, it doesn't realy have much use though. So will probably replace it later.

### Week 4
Added a :root block with CSS custom properties for the color palette and swapped the repeated hex colors throughout styles.css over to those variables. Swapped my grid layout with flex to appease the rubric. I'll have to look for a 3rd color to use on the page, but I can't seem to pick one right now. The goldish yellow isn't burning my eyes off though for the link.

### Week 5
Added add.html with a form for adding a quarterback to the tracker (name, team, passing yards, touchdowns, interceptions, passer rating, and an optional notes field), using a select for team and number inputs for the rest. Added an Add link to the nav on all three pages. I hadn't planned on adding QBs through a form previously. I didn't realize this would be part of the project, so will probably have to audible to another design idea as the next assignments require different rubric requirements.

### Week 6
Added client/js/app.js and linked it at the end of the body on index.html. Created const variables (title, sample quarterback count, top rating, a boolean for whether that rating counts as elite), a calculation for the average passer rating across the sample quarterbacks listed. Added an if/else that checks whether there are at least 3 quarterbacks tracked and logs a different message either way. I just hard coded the sample ratings for now, I imagine we will be doing more with this later.

### Week 7
Added client/js/data.js with a real items array of 6 quarterback objects, replacing hard-coded numbers from last week. Each item has the same fields (id, name, team, description, passingYards, touchdowns, interceptions, passerRating). Added getItemById, getItemsByCategory, and getAverageRating functions, with getItemsByCategory using filter. 

### Week 8
Switched .player-grid to CSS Grid. Columns running autofit and minmax. added gap: var(--space-md) to space evenly.Grid property of align-items: start added. Checked all sizes, seems good. Added a small spacing scale to :root to use. I used grid on the player cards because It's what I had originally and can make modifications to both columns and rows. I think I'm going to try to make a pyramid at some point ranked on their AVG fantasy points later. I imagine I would have to use Grid on that anyway.
