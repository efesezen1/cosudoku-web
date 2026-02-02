import { type FunctionReference, anyApi } from "convex/server";
import { type GenericId as Id } from "convex/values";

export const api: PublicApiType = anyApi as unknown as PublicApiType;
export const internal: InternalApiType = anyApi as unknown as InternalApiType;

export type PublicApiType = {
  friendGame: {
    searchUsers: FunctionReference<
      "query",
      "public",
      { searchTerm: string },
      any
    >;
    sendInvite: FunctionReference<
      "mutation",
      "public",
      {
        difficulty: "easy" | "medium" | "hard" | "expert";
        toUserId: Id<"users">;
      },
      any
    >;
    acceptInvite: FunctionReference<
      "mutation",
      "public",
      { inviteId: Id<"game_invites"> },
      any
    >;
    declineInvite: FunctionReference<
      "mutation",
      "public",
      { inviteId: Id<"game_invites"> },
      any
    >;
    getPendingInvites: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
    getInviteStatus: FunctionReference<
      "query",
      "public",
      { inviteId: Id<"game_invites"> },
      any
    >;
    cancelInvite: FunctionReference<
      "mutation",
      "public",
      { inviteId: Id<"game_invites"> },
      any
    >;
  };
  game: {
    createGame: {
      createMultiPlayerGame: FunctionReference<
        "mutation",
        "public",
        {
          difficulty: "easy" | "medium" | "hard" | "expert";
          player1Id: Id<"users">;
          player2Id: Id<"users">;
        },
        Id<"multiplayer_games">
      >;
      startGame: FunctionReference<
        "mutation",
        "public",
        { gameId: Id<"multiplayer_games"> },
        null
      >;
      createSoloGameForCurrentUser: FunctionReference<
        "mutation",
        "public",
        { difficulty: "easy" | "medium" | "hard" | "expert" },
        Id<"solo_games">
      >;
    };
    leaveGame: {
      leave: FunctionReference<
        "mutation",
        "public",
        { gameId: Id<"multiplayer_games"> },
        null
      >;
    };
    makeMove: {
      move: FunctionReference<
        "mutation",
        "public",
        {
          gameId: Id<"multiplayer_games">;
          move: {
            answerStatus:
              | "prefilled"
              | "correctAnswer"
              | "wrongAnswer"
              | "empty";
            by: Id<"users"> | null | "prefilled";
            order: number;
            value: number | null;
          };
        },
        { errorMessage: string | null; success: boolean }
      >;
    };
    matchRandomPlayer: {
      findMatch: FunctionReference<
        "mutation",
        "public",
        { difficulty: "easy" | "medium" | "hard" | "expert" },
        { gameId: Id<"multiplayer_games"> } | { waiting: boolean }
      >;
      getQueueStatus: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        {
          _creationTime: number;
          _id: Id<"matchmaking_queue">;
          difficulty: "easy" | "medium" | "hard" | "expert";
          gameId?: Id<"multiplayer_games">;
          status: "waiting" | "matching" | "matched";
          userId: Id<"users">;
        } | null
      >;
      getGameStartTime: FunctionReference<
        "query",
        "public",
        { gameId: Id<"multiplayer_games"> },
        {
          gameStartTime: number;
          status: "waiting" | "ongoing" | "completed" | "abandoned";
        } | null
      >;
      leaveQueue: FunctionReference<
        "mutation",
        "public",
        Record<string, never>,
        null
      >;
      getActiveGame: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        {
          gameId: Id<"multiplayer_games">;
          status: "waiting" | "ongoing" | "completed" | "abandoned";
        } | null
      >;
    };
    queryGame: {
      get: FunctionReference<
        "query",
        "public",
        { gameId?: Id<"multiplayer_games"> },
        any
      >;
    };
    soloMove: {
      move: FunctionReference<
        "mutation",
        "public",
        {
          gameId: Id<"solo_games">;
          move: {
            answerStatus:
              | "prefilled"
              | "correctAnswer"
              | "wrongAnswer"
              | "empty";
            by: Id<"users"> | null | "prefilled";
            order: number;
            value: number | null;
          };
        },
        null | { error: string; success: boolean }
      >;
      leave: FunctionReference<
        "mutation",
        "public",
        { gameId: Id<"solo_games"> },
        null
      >;
      findCurrentGame: FunctionReference<
        "query",
        "public",
        { gameId: Id<"solo_games"> },
        any
      >;
      getActiveGame: FunctionReference<
        "query",
        "public",
        Record<string, never>,
        {
          gameId: Id<"solo_games">;
          status: "waiting" | "ongoing" | "completed" | "abandoned";
        } | null
      >;
    };
  };
  onboarding: {
    setNickname: FunctionReference<
      "mutation",
      "public",
      { nickname: string },
      any
    >;
    skipNickname: FunctionReference<
      "mutation",
      "public",
      Record<string, never>,
      any
    >;
    hasCompletedOnboarding: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
  };
  users: {
    setUserStatus: FunctionReference<
      "mutation",
      "public",
      { status?: "online" | "offline" },
      any
    >;
    getCurrentUser: FunctionReference<
      "query",
      "public",
      Record<string, never>,
      any
    >;
  };
};
export type InternalApiType = {};
