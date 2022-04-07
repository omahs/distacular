import { SlashCommandSubcommandBuilder } from "@discordjs/builders";

export const buildGetFundingProposalCmd = () => {
  return new SlashCommandSubcommandBuilder()
    .setName("get-proposal-data")
    .setDescription("Get the info of a certain proposal");
};