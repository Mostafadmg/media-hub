import { describe, expect, it } from "vitest";
import { lessons } from "@/data/curriculum";
import { lessonLectures } from "@/data/lectures";
import { lessonBoards, slides } from "@/data/visuals";

describe("visual teaching boards", () => {
  it("gives every lesson at least one interactive board", () => {
    const missing = lessons.filter((lesson) => !lessonBoards[lesson.title]?.length).map((lesson) => lesson.title);
    expect(missing).toEqual([]);
  });

  it("only references boards that exist", () => {
    const missing = Object.values(lessonBoards).flat().filter((id) => !slides[id]);
    expect(missing).toEqual([]);
  });

  it("keeps a takeaway and at least two cards on every board", () => {
    for (const slide of Object.values(slides)) {
      expect(slide.takeaway.length).toBeGreaterThan(20);
      expect(slide.cards.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("gives every lesson a unique lecture scene and animated diagram", () => {
    const missing = lessons.filter((lesson) => !lessonLectures[lesson.title]).map((lesson) => lesson.title);
    expect(missing).toEqual([]);
    const scenes = lessons.map((lesson) => lessonLectures[lesson.title].scene);
    expect(new Set(scenes).size).toBe(lessons.length);
  });
});
