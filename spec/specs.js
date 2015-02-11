describe("Anagram", function() {
  it("returns the word if the words are the same", function() {
    expect(Anagram("cat", "cat")).to.equal("cat");
  });

  it("returns the word's perfect anagram if there is one", function() {
    expect(Anagram("cat", "act")).to.equal("act");
  });

  it("returns multiple perfect anagrams for words that have them", function() {
    expect(Anagram("rat", "art, tar")).to.equal("art, tar");
  });

  it("returns only perfect anagrams", function() {
    expect(Anagram("words", "sword, draws")).to.equal("sword")
  });

  it("returns partial anagrams for words that have them", function() {
    expect(Anagram("cat", "act, at")).to.equal("act, at")
  });

});
