require 'spec_helper'

describe Mongo::Monitoring::Event::Cmap::PoolClosed do

  describe '#summary' do

    let(:address) do
      Mongo::Address.new('127.0.0.1:27017')
    end

    declare_topology_double

    let(:pool) do
      server = make_server(:primary)
      Mongo::Server::ConnectionPool.new(server)
    end

    let(:event) do
      described_class.new(address, pool)
    end

    it 'renders correctly' do
      expect(event.summary).to eq("#<PoolClosed address=127.0.0.1:27017 pool=0x#{pool.object_id}>")
    end
  end
end