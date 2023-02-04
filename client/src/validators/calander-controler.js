export function calanderControler() {
  console.log("calanderused");
  const today = new Date();
  const fourteenYearsAgo = new Date();
  fourteenYearsAgo.setFullYear(today.getFullYear() - 14);

  const min = fourteenYearsAgo.toISOString().split("T")[0];
  const max = today.toISOString().split("T")[0];
  console.log("calanderused", min, max);
  return { min, max };
}
