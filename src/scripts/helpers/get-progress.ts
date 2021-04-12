import { Score } from "@scripts/models/score";

function getProgress(score: Score): number {
    return score.correct + score.wrong;
}

export {
    getProgress
};