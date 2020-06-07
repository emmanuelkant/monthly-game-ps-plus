export const getHTML = async () => {
  try {
    const res = await fetch(
      'https://www.playstation.com/en-gb/explore/playstation-plus/this-month-on-ps-plus/',
    );
    return await res.text();
  } catch (e) {
    return new Error(e);
  }
};
