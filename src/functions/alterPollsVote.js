export default function alterPollsVote(polls, e) {
  const { id, option } = e.detail;

  let upvotedPoll = polls.find((poll) => poll.id == id);

  if (option === "a") {
    upvotedPoll.votesA++;
  }
  if (option === "b") {
    upvotedPoll.votesB++;
  }

  return polls;
}
