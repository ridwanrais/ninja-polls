<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // functions
  import alterPollsVote from "./functions/alterPollsVote";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];
  const tabChange = (e) => (activeItem = e.detail);

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };

  // const handleVoteV2 = (e) => (polls = alterPollsVote(polls, e));
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
