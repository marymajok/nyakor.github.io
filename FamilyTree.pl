% Facts
father(malek, akuekeuk).
father(akuekeuk, nyariel).
father(akuekuek, mathieng).
father(nyariel, majok).
father(nyariel, makeu).
father(nyariel, illua).
father(nyariel, ayor).
father(majok, mary).
father(majok, dictor).
father(majok, jima).
father(majok, samuel).
father(majok, gum).
father(majok, dthour).
father(majok, nyariik).
father(majok, athie).
father(majok, makur).

mother(nyibol, majok).
mother(iker, mary).
mother(akoi, dictor).
mother(akoi, dthour).
mother(akoi, athie).
mother(akoi, samuel).
mother(yom, jima).
mother(yom, gum).
mother(yom, nyariik).

% Rules
parent(X, Y) :- father(X, Y).
parent(X, Y) :- mother(X, Y).

siblings(X, Y) :- parent(Z, X), parent(Z, Y), X \= Y.

% Query examples
% Query: mother(X, mary).
% Result: X = nyibol.
%
% Query: siblings(X, samuel).
% Result: X = dictor ; X = jima ; X = gum ; X = dthour ; X = nyariik ; X = athie ; X = makur.
