const flattenAuthorsIds = (authorsIds) => {
  if (Array.isArray(authorsIds)) {
    return authorsIds.map((authorId) => {
      return authorId["$"];
    });
  } else {
    return [authorsIds["$"]];
  }
};

const flattenThemes = (themes) => {
  if (themes) {
    return typeof themes.theme === "string"
      ? [themes.theme.toLowerCase()]
      : themes.theme.map((theme) => theme.toLowerCase());
  } else {
    return null;
  }
};

export const restructureResponse = (matches) => {
  return matches.map((title) => {
    return {
      title: title.titleweb,
      workid: title.workid,
      author: title.authorweb,
      authorId: flattenAuthorsIds(title.authors.authorId),
      description: title.flapcopy,
      isbn: title.isbn,
      pages: title.pages,
      themes: flattenThemes(title.themes),
    };
  });
};
