<script>
  import "../app.css";
  import { theme, THEMES } from "$lib/stores/theme";
  const toggleTheme = () => {
    $theme = $theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  };
</script>

<svelte:head></svelte:head>
<slot />