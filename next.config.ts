import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/eng.json',
  },
});

const nextConfig: NextConfig = {
  agentRules: false,
};

export default withNextIntl(nextConfig);
