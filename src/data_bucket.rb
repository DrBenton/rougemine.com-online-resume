require 'date'
require 'pathname'
require 'psych'
require 'singleton'

require 'concerns/project_path_aware'

module Rougemine
    class DataBucket
        include Singleton
        include ProjectPathAware

        def skills
            @skills_data ||= data_from_yaml("skills")["skills"]
        end

        def now
            @now ||= DateTime.now.iso8601
        end

        private

        def data_from_yaml(file_name)
            Psych.load_file(File.join(data_path, "#{file_name}.yml"))
        end
    end
end