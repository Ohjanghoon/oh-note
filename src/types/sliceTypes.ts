export interface InitialState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
