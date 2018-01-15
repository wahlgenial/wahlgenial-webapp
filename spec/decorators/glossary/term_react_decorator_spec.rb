require 'rails_helper'

RSpec.describe Glossary::TermReactDecorator do
  describe 'glossary terms react decorator' do
    let(:output) do
      [ { "letter" => "A", "count" => 1,
          "terms" =>[
            { :title => "aTerm",
              :description => "aTerm Description",
              :image => nil,
              :image_thumb => nil} ]
        },
        { "letter" => "B", "count" => 0, "terms" => [] },
        { "letter" => "C", "count" => 0, "terms" => [] },
        { "letter" => "D", "count" => 0, "terms" => [] },
        { "letter" => "E", "count" => 0, "terms" => [] },
        { "letter" => "F", "count" => 0, "terms" => [] },
        { "letter" => "G", "count" => 0, "terms" => [] },
        { "letter" => "H", "count" => 0, "terms" => [] },
        { "letter" => "I", "count" => 0, "terms" => [] },
        { "letter" => "J", "count" => 0, "terms" => [] },
        { "letter" => "K", "count" => 0, "terms" => [] },
        { "letter" => "L", "count" => 1,
          "terms" => [
            { :title => "lTerm",
              :description => "lTerm Description",
              :image => nil,
              :image_thumb => nil}]
        },
        { "letter" => "M", "count" => 0, "terms" => [] },
        { "letter" => "N", "count" => 0, "terms" => [] },
        { "letter" => "O", "count" => 0, "terms" => [] },
        { "letter" => "P", "count" => 0, "terms" => [] },
        { "letter" => "Q", "count" => 0, "terms" => [] },
        { "letter" => "R", "count" => 0, "terms" => [] },
        { "letter" => "S", "count" => 0, "terms" => [] },
        { "letter" => "T", "count" => 0, "terms" => [] },
        { "letter" => "U", "count" => 0, "terms" => [] },
        { "letter" => "V", "count" => 0, "terms" => [] },
        { "letter" => "W", "count" => 0, "terms" => [] },
        { "letter" => "X", "count" => 0, "terms" => [] },
        { "letter" => "Y", "count" => 0, "terms" => [] },
        { "letter" => "Z", "count" => 2,
          "terms" => [
            { :title => "ZTerm",
              :description => "ZTerm Description",
              :image => nil,
              :image_thumb => nil },
            { :title => "zzTerm",
              :description => "zzTerm Description",
              :image => nil,
              :image_thumb => nil}]
        }]
    end

    it 'returns the correct data tree' do

      create(:term, title: 'aTerm', description: 'aTerm Description')
      create(:term, title: 'lTerm', description: 'lTerm Description')
      create(:term, title: 'ZTerm', description: 'ZTerm Description')
      create(:term, title: 'zzTerm', description: 'zzTerm Description')

      glossary_terms = Glossary::TermReactDecorator.decorate(Glossary::Term.order_by_title)
      expect(glossary_terms.to_h).to eql(output)
    end
  end
end
