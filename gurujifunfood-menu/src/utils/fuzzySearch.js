/**
 * Computes the Levenshtein edit distance between two strings.
 * Lower = more similar. 0 = identical.
 */
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  // Use two rows to keep memory O(n)
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  let curr = new Array(n + 1);

  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(
        curr[j - 1] + 1,        // insertion
        prev[j] + 1,             // deletion
        prev[j - 1] + cost       // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[n];
}

/**
 * Returns the allowed edit distance for a given word length.
 * Short words (<=4 chars): allow 1 typo
 * Medium words (5-7 chars): allow 2 typos
 * Long words (8+ chars): allow 3 typos
 */
function threshold(wordLen) {
  if (wordLen <= 3) return 0;  // exact match only for very short words
  if (wordLen <= 4) return 1;
  if (wordLen <= 7) return 2;
  return 3;
}

/**
 * Scores how well a single query token matches a target token.
 * Returns 0 if no match, or a positive score (higher = better match).
 */
function scoreToken(qToken, targetToken) {
  // Exact prefix match is the best signal
  if (targetToken.startsWith(qToken)) return 100;
  // Exact substring match
  if (targetToken.includes(qToken)) return 80;

  // Fuzzy match using edit distance
  const dist = levenshtein(qToken, targetToken);
  const allowed = threshold(qToken.length);
  if (dist <= allowed) {
    // Score decreases as distance increases
    return Math.max(1, 60 - dist * 20);
  }

  return 0;
}

/**
 * fuzzyMatch(query, target)
 *
 * Checks whether a search query fuzzy-matches a target string.
 * Each word in the query must match at least one word in the target.
 *
 * Returns { match: boolean, score: number }
 * score is higher for better matches (use to sort results).
 */
export function fuzzyMatch(query, target) {
  const q = query.trim().toLowerCase();
  const t = target.toLowerCase();

  if (!q) return { match: false, score: 0 };

  // Fast path: direct substring match gets the top score
  if (t.includes(q)) return { match: true, score: 200 };

  const qTokens = q.split(/\s+/).filter(Boolean);
  const tTokens = t.split(/\s+/).filter(Boolean);

  let totalScore = 0;

  for (const qToken of qTokens) {
    if (qToken.length < 2) continue; // skip single-char tokens

    let bestForToken = 0;
    for (const tToken of tTokens) {
      const s = scoreToken(qToken, tToken);
      if (s > bestForToken) bestForToken = s;
    }

    if (bestForToken === 0) {
      // This query word has no match at all — fail the whole query
      return { match: false, score: 0 };
    }

    totalScore += bestForToken;
  }

  return totalScore > 0
    ? { match: true, score: totalScore }
    : { match: false, score: 0 };
}
