import { rephrase } from "./shawn";

describe("rephrase", () => {
	it("validates against input that was already sent in the past", () => {
		const phrase = "Hi there";
		rephrase(phrase);
		const res1 = rephrase(phrase);
		expect(res1).toEqual("Never send me that atrocious sentence again.");
	});

	describe("pedantic", () => {
		it("replaces words with same word", () => {
			const phrase = "This is redicoulous";
			const res = rephrase(phrase, true);
			expect(res).toEqual("Shaw shaw shaw");
		});
		it("mimic word capitalization", () => {
			const phrase = "This Is redicoulous";
			const res = rephrase(phrase, true);
			expect(res).toEqual("Shaw Shaw shaw");
		});
	});

	describe("non-pedantic", () => {
		it("does not replace non sh-sounding sounds", () => {
			const phrase = "Are you working from home?";
			const res = rephrase(phrase);
			expect(res).toEqual("Are you working from home?");
		});
		it("remove long ssss sounds", () => {
			const phrase = "Less sweets in kitchen";
			const res = rephrase(phrase);
			expect(res).toEqual("Lesh sweetsh in kitchen");
		});
		it("s followed by a wovel were difficult to pronounce", () => {
			expect(rephrase("I saw the movie")).toEqual("I shaw the movie");
			expect(rephrase("so clever")).toEqual("sho clever");
		});
		it("remove duplicate lisp", () => {
			const phrase = "'shsh' he uttered";
			const res = rephrase(phrase);
			expect(res).toEqual("'sh' he uttered");
		});
		it("sounds that are very close to 'sh'", () => {
			expect(rephrase("spicy food")).toEqual("spishy food");
			expect(rephrase("Dick traci")).toEqual("Dick trashi");
		});
		it("remove long SSSS", () => {
			expect(rephrase("LESS = better CSS")).toEqual("LESh = better CSh");
		});
		it("don't know what this means", () => {
			expect(rephrase("SHovel")).toEqual("Shovel");
			expect(rephrase("Ssi")).toEqual("Shi");
		});
		it("Sch sound", () => {
			expect(rephrase("School open")).toEqual("Shchool open");
		});
		it("Remove extra S", () => {
			expect(rephrase("LesSh")).toEqual("Lesh");
		});
		it("Sean becomes shawn", () => {
			expect(rephrase("Sean")).toEqual("Shawn");
		});
		it("S followed by t", () => {
			expect(rephrase("First order")).toEqual("Firsht order");
		});
		it("Words that end with an -s", () => {
			expect(rephrase("Free toilets")).toEqual("Free toiletsh ");
		});
	});
});
